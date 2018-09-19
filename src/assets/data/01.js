// leopard 豹
// Swallow 燕子
export default {
  // '0000': {
  //   res: [
  //     {
  //       user: 'eagle',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'eleven',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'dove',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'falcon',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'leopard',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'sky',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'fire',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'swallow',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'wolf',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'yangxin',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     },
  //     {
  //       user: 'leaf',
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。'
  //     }
  //   ],
  //   req: [
  //     {
  //       value: '《剑赋》有云：形而上剑，旷古无人。万剑敬仰，奉若天神。',
  //       next: '0001'
  //     }
  //   ]
  // },
  '0000': {
    res: [{ user: 'eagle', value: '嗯？什么人？出来！' }],
    req: [{ value: '你好！', next: '0001' }]
  },
  '0001': {
    res: [
      { user: 'eagle', value: '噢，是你？你好！我叫夜鹰……' },
      { user: 'eagle', value: '是当年……' },
      {
        user: 'eagle',
        value: '经历了残酷的厮杀角逐后，侥幸当上武协会长的人……'
      },
      { user: 'dove', value: '夜鹰，你能别老用省略号结尾吗？' },
      { user: 'eagle', value: '？？' },
      { user: 'dove', value: '总是给人未完待续的感觉。' },
      { user: 'eagle', value: '哦……' },
      { user: 'dove', value: '……' },
      { user: 'eagle', value: '@我 你怎么现在才来？你是新生吗？' }
    ],
    req: [
      { value: '对，我是萌新！', next: '0002' }
      // { value: '呵呵，不是', next: '0002' }
    ]
  },
  '0002': {
    res: [
      { user: 'eagle', value: '嗯，夜鹰是我的……' },
      { user: 'eagle', value: '亲切点叫昵称' },
      { user: 'eagle', value: '装X点叫代号' },
      { user: 'eagle', value: '娘炮点叫花名' },
      {
        user: 'eagle',
        value: '武协最开始的那两届，每个人都是有花名的，好记，有趣，也亲切一些~'
      },
      { user: 'eagle', value: '虽然我是会长，但我不喜欢别人叫我会长~' },
      { user: 'falcon', value: '我知道我知道！' },
      { user: 'falcon', value: '他一定是觉得这样叫会显得自己很老！' },
      { user: 'eagle', value: '@夜隼 老拆你师父的台，会长不高的。' },
      { user: 'falcon', value: '/撇嘴' },
      {
        user: 'eagle',
        value: '@我 上面那位，看名字跟我一样姓夜，就知道她是我徒弟了。'
      },
      {
        user: 'eagle',
        value: '总之，你自己也可以给自己起个花名。现在，跟我来~'
      }
    ],
    req: [{ value: '去哪？', next: '0003' }]
  },
  '0003': {
    res: [
      { user: 'eleven', value: '夜鹰，带路就带路，你拉人家手干嘛？' },
      {
        user: 'eagle',
        value: '上面穿橙色衣服的那位，是武协第二任会长，叫十一。'
      },
      {
        user: 'eagle',
        value: '我被流放之后，就是他接替了会长的职务。'
      },
      { user: 'dove', value: '/偷笑' }
    ],
    req: [{ value: '等等，为什么你们每个人的衣服不一样？', next: '0004' }]
  },
  '0004': {
    res: [
      { user: 'eagle', value: '哦…你说衣服啊~' },
      {
        user: 'eagle',
        value:
          '我们用了日本传统色卡的色值来装饰这个地方，每个人的颜色都不一样，你也有自己的颜色，我看看……'
      },
      { user: 'eagle', value: '噢，你的衣服颜色叫红碧，看见了吗？' },
      {
        user: 'eagle',
        value: '我们的颜色也都写在名字旁边，大部分人的颜色都有渐变。'
      },
      {
        user: 'eagle',
        value:
          '比如白鸽的颜色就是用了近似于樱花的色系，是她自己要求的。唉，选颜色的时候，他们一个个挑剔的很呢！'
      },
      { user: 'dove', value: '/偷笑' },
      { user: 'eagle', value: '好了，我们到了！' },
      {
        user: 'leopard',
        value: '@我 不知道你注意到没有，我的颜色是斜向渐变的。我叫豹子哈！'
      },
      { user: 'leopard', value: '豹！你知道吗？就内个……大猫！' },
      { user: 'eagle', value: '/捂脸' }
    ],
    req: [{ value: '嗯？青豹师兄好！', next: '0005' }]
  },
  '0005': {
    res: [
      {
        user: 'eagle',
        value:
          '哦，我忘了说。欢迎你加入武术协会，如果有笔墨纸砚的话，我一定会亲手给你写一封邀请信的！'
      },
      {
        user: 'eagle',
        value:
          '欢迎你加入武术协会，如果有笔墨纸砚的话，我一定会亲手给你写一封邀请信的！'
      },
      { user: 'dove', value: '噗……就你那字……' },
      {
        user: 'eagle',
        value: '/捂脸'
      },
      { user: 'swallow', value: '等等，还有信？' },
      { user: 'swallow', value: '为啥我们没这待遇？' },
      { user: 'eagle', value: '唉，可能是将我流放的下一任会长的字比较丑' },
      { user: 'eagle', value: '所以抛弃了这一难能可贵的中华民族优良传统' },
      { user: 'eleven', value: '······' },
      {
        user: 'eagle',
        value:
          '@我 Anyway, 真心欢迎并且感谢你愿意了解这门中华传统文化。伸手过来!'
      }
    ],
    req: [{ value: '干嘛？', next: '0006' }]
  },
  '0006': {
    res: [
      { user: 'eagle', value: '送你一句话！' },
      { user: 'eleven', value: '@黑火@天啸 你们看得出来他在写啥吗？' },
      { user: 'fire', value: '笔走龙蛇的，看不出来！' },
      { user: 'sky', value: '可能是在写 阿弥陀佛' },
      { user: 'dove', value: '阿弥陀佛？ 夜鹰不是道家的人吗？' },
      { user: 'eagle', value: '好了，知道我给你写了什么吗？' }
    ],
    req: [
      {
        value: '朔本逐源，方得始终',
        next: '0007'
      }
    ]
  },
  '0007': {
    res: [
      { user: 'eagle', value: '嗯，是的~' },
      {
        user: 'eagle',
        value: '武学已绵延千年，源远流长，确实有些精髓可谓是妙绝巅毫。'
      },
      { user: 'leaf', value: '【妙绝巅毫】这个词不错，你写作文可以用上。' },
      {
        user: 'eagle',
        value:
          '但再怎么玄妙，也必然符合科学，因此，要习武的第一要领，就是不要用仰望的目光看待武术。它不至于那么肤浅，却也并不那么神秘。能够及时认清其中的糟粕、谎言和讹传，能让你少走弯路。'
      },
      {
        user: 'eagle',
        value:
          '事实上，任何传统文化都是如此，另一个典型就是中医，在这里就不细说了。'
      },
      {
        user: 'eagle',
        value:
          '带你来这里，是想跟你说说，武术的起源。这是我身为一个武术传承人的责任，也是你作为刚入门的继承人需要了解的。'
      },
      {
        user: 'eagle',
        value:
          '这应该算是个仪式，就像将希望之火，连同荣耀和未来，交到你的手上。'
      },
      {
        user: 'eleven',
        value: '不要夹杂动漫词汇啊！'
      },
      {
        user: 'eagle',
        value: '@我 准备好了吗？'
      }
    ],
    req: [{ value: '准备好了，请说！', next: '0008' }]
  },
  '0008': {
    res: [
      {
        user: 'eagle',
        value: 'ppp'
      }
    ],
    req: [{ value: 'k', next: '0007' }]
  }
}
