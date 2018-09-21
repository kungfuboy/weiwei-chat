<template>
  <section class="content">
    <div class="title">{{inputing ? '对方正在输入……' : '武协小筑'}}<i @click="shareLink()"></i></div>
    <div class="talk" v-show="talkShow" @click="talkShow = false">
      <ul :class="{active: talkShow}">
        <li v-for="(item, index) in options" :key="index" @click="talkData(item)">{{item.value}}</li>
      </ul>
    </div>
    <ul class="chat-list" ref="chat">
      <li v-for="(item, index) in talkArr" :class="item.user ? item.user + ' left' : 'right'" :key="index">
        <span>{{item.value}}</span>
      </li>
      <li class="left wish" v-show="inputing">
        <span>
          <i class="dot"></i>
          <i class="dot"></i>
          <i class="dot"></i>
        </span>
      </li>
    </ul>
    <div class="input" @click="saySome">{{inputing ? '对方打字中……' : '说点什么吧...'}}</div>
   <textarea id="link" class="link"></textarea>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const dataJSON: any = require('@/assets/data').default

@Component
export default class Main extends Vue {
  // data
  private talkShow: boolean = false
  private talkArr: any = []
  private options: any = []
  private inputing: boolean = false

  private mounted() {
    setTimeout(() => {
      const key: string = '0000'
      dataJSON[key].res.forEach((item: any) => {
        this.talkArr.push(item)
      })
      this.options = dataJSON[key].req
    }, 1600)
  }

  // methods
  private saySome(): void {
    !this.inputing && (this.talkShow = true)
  }

  private talkData(data: any): void {
    this.talkShow = false
    this.inputing = true // 输入状态

    // 提问处理
    this.talkArr.push({
      user: null,
      value: data.value
    })
    this.updateScroll()

    // 回答处理
    this.options = dataJSON[data.next].req

    const resData = dataJSON[data.next].res
    const len = resData.length - 1
    let i = 0
    const timer = setInterval(() => {
      this.pushData(resData[i])
      if (i >= len) {
        clearInterval(timer)
        this.inputing = false // 非输入状态
      }
      this.updateScroll()
      i++
    }, 3000)
  }

  private pushData(data: any): void {
    this.talkArr.push(data)
  }

  private shareLink(): void {
    // 生成拼接链接
    const link = 'www'
    // 复制到剪贴板
    const input: any = document.getElementById('link')
    input.value = link // 修改文本框的内容
    input.select() // 选中文本
    document.execCommand('copy') // 执行浏览器复制命令
    console.log('复制成功')
  }

  private updateScroll(): void {
    const $dom: any = this.$refs.chat
    const distance = $dom.scrollHeight - $dom.offsetHeight
    const duration = 250
    const startTime = Date.now()

    requestAnimationFrame(function step() {
      const p = Math.min(1, (Date.now() - startTime) / duration)
      $dom.scrollTop = $dom.scrollTop + distance * p
      p < 1 && requestAnimationFrame(step)
    })
  }
}
</script>

<style scoped lang="less">
@themeColor: #7b90d2;
@import '../assets/styles/chat.less';
@import '../assets/styles/peopleChat.less';
@import '../assets/styles/animate.less';

.content {
  margin: auto;
  height: 100vh;
  width: 100%;
  max-width: 480px;
  box-sizing: border-box;
  position: relative;
  // background: #7db9de; // 勿忘草
  background: #fffffb;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-image: url('../assets/images/texture.png');
  .title {
    background: linear-gradient(to right, #7b90d2, #2ea9df, #7b90d2);
    color: #fff;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    box-shadow: 0 0 5px #f1f1f1;
    border-radius: 2px;
    text-align: center;
    position: relative;
    font-weight: 800;
    font-size: 16px;
    i {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 45px;
      background-image: url('../assets/images/share.svg');
      background-size: 22px;
      background-position: center, center;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
  .link {
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
    border: none;
    position: absolute;
    z-index: -10;
  }
  .talk {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 50px;
    background: rgba(0, 0, 0, 0.4);
    z-index: 15;
    ul {
      position: absolute;
      bottom: 0;
      background: #fff;
      padding: 0;
      margin: 0;
      width: 100%;
      transform: translateY(100%);
      transition: 0.3s all ease;
      &.active {
        transform: translateY(0);
        transition: 0.3s all ease;
      }
      li {
        height: 44px;
        line-height: 44px;
        padding: 0 15px;
        margin: 0;
        font-size: 14px;
        list-style: none;
        color: #2760bd;
        display: block;
        position: relative;
        &:after {
          display: block;
          position: absolute;
          bottom: 0;
          content: '';
          bottom: 0;
          height: 1px;
          left: 10px;
          right: 10px;
          background: #e8e8e8;
        }
      }
    }
  }
  .input {
    background: #fff;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    color: #888;
    font-size: 13px;
    box-shadow: 0 0 3px @themeColor;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}
</style>
