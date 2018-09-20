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
      { user: 'eagle', value: '噢，是你？' },
      { user: 'eagle', value: '你好！我叫夜鹰……' },
      { user: 'eagle', value: '我是当年……' },
      {
        user: 'eagle',
        value: '经历了残酷的厮杀角逐后，侥幸当上武协会长的人……'
      },
      { user: 'dove', value: '@夜鹰 你能别老用省略号结尾吗？' },
      { user: 'eagle', value: '？？' },
      { user: 'dove', value: '总是给人未完待续的感觉。' },
      { user: 'eagle', value: '哦……' },
      { user: 'dove', value: '……' },
      { user: 'eagle', value: '@你 你怎么现在才来？你是新生吗？' }
    ],
    req: [
      { value: '对，我是萌新！', next: '0002' }
      // { value: '呵呵，不是', next: '0002' }
    ]
  },
  '0002': {
    res: [
      { user: 'eagle', value: '嗯，夜鹰是我的……昵称' },
      { user: 'eleven', value: '亲切点叫昵称' },
      { user: 'eleven', value: '装X点叫代号' },
      { user: 'falcon', value: '娘炮点叫花名' },
      {
        user: 'eagle',
        value:
          '在武协最开始的那两届，每个人都是有花名的，好记，有趣，也亲切一些~'
      },
      { user: 'eagle', value: '虽然我是会长，但我不喜欢别人叫我会长~' },
      { user: 'falcon', value: '我知道！我知道！' },
      { user: 'falcon', value: '他一定是觉得这样叫，会显得自己很老！' },
      { user: 'eagle', value: '@夜隼 老拆你师父的台，会长不高的。' },
      { user: 'falcon', value: '/撇嘴' },
      {
        user: 'eagle',
        value: '@你 上面那位，看名字跟我一样姓夜，就知道她是我徒弟了。'
      },
      {
        user: 'eagle',
        value: '总之，你自己也可以给自己起个花名。'
      },
      {
        user: 'eagle',
        value: '现在，跟我来~'
      }
    ],
    req: [{ value: '去哪？', next: '0003' }]
  },
  '0003': {
    res: [
      { user: 'eleven', value: '@夜鹰 有谁看见黄药师了吗？' },
      { user: 'dove', value: '/摇头' },
      { user: 'fire', value: '/摇头' },
      {
        user: 'eagle',
        value: '上面穿橙色衣服的那位，是武协第二任会长，叫十一。'
      },
      {
        user: 'eagle',
        value: '我被流放之后，是他接替了会长的职务。'
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
          '我们用了日本传统色卡的色值来装饰这个地方，每个人的颜色都不一样。'
      },
      { user: 'dove', value: '你也有自己颜色的，我看看……' },
      { user: 'dove', value: '噢，你的衣服颜色叫红碧，看见了吗？' },
      {
        user: 'dove',
        value: '我们的颜色也都写在名字旁边，大部分人的颜色都有渐变。'
      },
      {
        user: 'eagle',
        value: '比如白鸽的颜色就是用了近似于樱花的色系，是她自己要求的。'
      },
      { user: 'dove', value: '/害羞' },
      {
        user: 'leopard',
        value: '@你 不知道你注意到没有，我的颜色是斜向渐变的。我叫豹子哈！'
      },
      { user: 'leopard', value: '豹！你知道吗？就内个……大猫！' },
      { user: 'eagle', value: '/捂脸' }
    ],
    req: [{ value: '嗯！青豹师兄好！', next: '0005' }]
  },
  '0005': {
    res: [
      { user: 'eagle', value: '好了，我们到了！' },
      { user: 'eagle', value: '这里是个庄严的地方。' },
      {
        user: 'eagle',
        value:
          '欢迎你加入武术协会，如果有笔墨纸砚的话，我一定会亲手给你写一封邀请信的！'
      },
      { user: 'falcon', value: '噗……就你那字……' },
      {
        user: 'eagle',
        value: '/捂脸'
      },
      { user: 'swallow', value: '等等，还有信？' },
      { user: 'swallow', value: '为啥我们当年没这待遇？' },
      { user: 'eagle', value: '呃，应该是将我流放的下一任会长的字比较丑' },
      { user: 'eagle', value: '所以抛弃了这一难能可贵的中华民族优良传统' },
      { user: 'eleven', value: '哼，那是因为我那时候的时间都放在正事上面了！' },
      { user: 'eagle', value: '你是指谈恋爱吗？' },
      {
        user: 'eagle',
        value: '你们约会的时候我不是一直在做电灯泡吗？我的时间也没比你多多少……'
      },
      { user: 'dove', value: '/害羞' },
      { user: 'eleven', value: '······' },
      {
        user: 'eagle',
        value: '@你 总之, 真诚欢迎并且感谢你愿意了解这门中华传统文化。伸手过来!'
      }
    ],
    req: [{ value: '干嘛？', next: '0006' }]
  },
  '0006': {
    res: [
      { user: 'eagle', value: '送你一句话！' },
      {
        user: 'eleven',
        value: '@黑火@天啸 你们看得出来夜鹰在别人手上写啥吗？'
      },
      { user: 'fire', value: '笔走龙蛇的，看不出来！' },
      { user: 'sky', value: '可能是在写 阿弥陀佛' },
      { user: 'dove', value: '阿弥陀佛？ 夜鹰不是道家的人吗？' },
      { user: 'eagle', value: '好了，知道我给你写了什么吗？' }
    ],
    req: [
      {
        value: '是不是……朔本逐源，方得始终？',
        next: '0007'
      }
    ]
  },
  '0007': {
    res: [
      { user: 'eagle', value: '嗯，是的~' },
      { user: 'eagle', value: '朔本逐源，方得始终' },
      { user: 'eagle', value: '这八个字你要记住！' },
      { user: 'eleven', value: '呵呵，他以后还会有很多的“八个字”会让你记住。' },
      { user: 'eleven', value: '比如：凡势莫尽，尽则早尽' },
      { user: 'leopard', value: '比如：抑扬顿挫，轻重缓急' },
      { user: 'sky', value: '比如：敌进我退，敌退我打' },
      { user: 'eagle', value: '你们拆台的能不能不要再这个时候互动？' },
      {
        user: 'eagle',
        value: '武学已绵延千年，源远流长，确实有些精髓可谓是妙绝巅毫。'
      },
      {
        user: 'leaf',
        value: '@你【妙绝巅毫】这个词不错，你以后写作文可以用上。'
      },
      {
        user: 'eagle',
        value:
          '但武术无论再怎么玄妙，也必然要符合科学常理，因此，习武的第一要领——别用仰望的目光看待武术。'
      },
      {
        user: 'eagle',
        value:
          '它不至于那么肤浅，却也并不那么神秘。及时认清其中的糟粕、谎言和讹传，能让你少走弯路。'
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
        value: '这应该算是个仪式，就像将One for all的火种，交到你的手上。'
      },
      {
        user: 'eleven',
        value: '不要夹杂动漫词汇啊！'
      },
      {
        user: 'eagle',
        value: '@你 准备好了吗？'
      }
    ],
    req: [{ value: '准备好了', next: '0008' }]
  },
  '0008': {
    res: [
      {
        user: 'eagle',
        value:
          '隋朝设立科举，修运河，而且开始重商，中国历史的商品经济繁荣，就开始于隋朝，在唐代达到巅峰。'
      },
      {
        user: 'eagle',
        value:
          '缘于这样的时代背景，在中国的历史上，出现了三个重要的行业，都是其他国家的历史所没有的，分别是……'
      },
      {
        user: 'eagle',
        value: '？？'
      },
      {
        user: 'eleven',
        value: '看我们干嘛？'
      },
      {
        user: 'eagle',
        value: '抢答时间啊！有点默契好不好？情绪都断了……'
      },
      {
        user: 'eleven',
        value: 'OK OK，再来！'
      },
      {
        user: 'eagle',
        value: '那三个重要的行业，分别是……'
      },
      {
        user: 'eleven',
        value: '科举'
      },
      {
        user: 'dove',
        value: '镖局'
      },
      {
        user: 'falcon',
        value: '还有青楼'
      },
      {
        user: 'eagle',
        value:
          '嗯，隋唐兴起了商品经济，增强了贸易往来，物流变得尤为重要，那时候没有火车，自然就只能靠人押运，货品经过一些穷山恶水、民风彪悍之地，自然就需要有专人护送。'
      },
      {
        user: 'eagle',
        value:
          '镖局的镖师不送货的时候，自然就在镖局里习武，试想一下，如果你是镖师，当然不希望自己身边有猪队友，所以，相互之间交流武学是为了保障安全，在这种动机下传承武术，基本不会藏私。'
      },
      {
        user: 'eagle',
        value:
          '再者，那时候镖师之间流传的武术，也最为精粹，练得都是保命的功夫，自然不会掺杂华而不实的东西。'
      },
      {
        user: 'eagle',
        value:
          '武之侠者，所谓侠义的风范，大致也是从那个时候开始，说是叫侠义，其实也就是一些潜规则。'
      },
      {
        user: 'sky',
        value: '那个时候，所谓的江湖人，大多也都是镖师。'
      },
      {
        user: 'eagle',
        value:
          '镖局这个行业几度壮大，在明清达到顶峰。明朝末期，由于地方官僚腐败无能，国家的部分税收甚至要倚靠镖局的漕运（水上运输），武术也随着镖局的遍地开花而流传开来。'
      },
      {
        user: 'eagle',
        value:
          '当然，战场上退役的军人，各个门派的传人，也对武术的流传有不可磨灭的贡献，但就真实的史实来看，镖局起的推动作用最大。'
      },
      {
        user: 'eagle',
        value:
          '老舍有一篇短篇小说，叫《断魂枪》，有兴趣的话可以看看，小说开头的第一句话就是：镖局改了客栈。'
      },
      {
        user: 'eagle',
        value:
          '老舍是经历过那个时代的人，因此在他这篇小说第一句话就写出了当时镖局没落的局面。'
      },
      {
        user: 'eagle',
        value:
          '清朝末期，有了更先进的火车和枪炮，不需要镖师再扛旗舞刀弄剑，这个行业也就没落了。'
      }
    ],
    req: [{ value: '除了镖局呢？', next: '0009' }]
  },
  '0009': {
    res: [
      {
        user: 'leopard',
        value:
          '除了镖局，倒是还有一些穷山恶水、或商业繁荣地方，出过一些影响力极大的门派。'
      },
      {
        user: 'sky',
        value:
          '比如沧州八极拳，山西太古的形意拳，河南陈家沟的太极拳，佛山咏春，当年的广东十虎。'
      },
      {
        user: 'fire',
        value:
          '还有民国南京的中央国术馆和上海精武体育会，甚至建国后的香港，也是武术名家扎堆的地方。'
      },
      { user: 'eleven', value: '为啥都跑去香港？' },
      {
        user: 'sky',
        value:
          '因为那些武术名家大多是国民党的人，比如叶问，他当时算是在国民党的警察局当差。建国后，意识形态尖锐，怕被共产党迫害，出走香港。'
      },
      { user: 'eagle', value: '但这些就比较零碎了，不成体系。' },
      { user: 'dove', value: '还有内个没说~' },
      { user: 'eagle', value: '什么？' },
      { user: 'falcon', value: '态度' },
      {
        user: 'eagle',
        value:
          '哦，对，有个词叫相教助长。从隋唐到尽头，已经有千余年，但如今能排的上号的门派，历史最远也就追溯到明朝，大多数都只能追溯到清朝。'
      },
      { user: 'eagle', value: '这就有两个可能性。' },
      {
        user: 'dove',
        value:
          '第一，明清之前的武术实在太过于笨拙，以致于被明清时期的一些新兴门派所取代。'
      },
      {
        user: 'falcon',
        value:
          '第二，在那之前的门派，都在流传中断绝传承，想必，是各师父藏私所致。'
      },
      {
        user: 'eagle',
        value: '@夜隼 你这什么眼神？我可没藏私啊~'
      },
      {
        user: 'eleven',
        value: '咦，武当少林不是能追溯到达摩祖师和倚天屠龙么……'
      },
      {
        user: 'eagle',
        value:
          '你要搞清楚，武当少林的主业是烧香拜佛、修心悟道，不是传播武术，他们是宗教门派，不是武术门派。'
      },
      {
        user: 'eagle',
        value:
          '我想说的是，相教助长，有弘扬传播，才能发展，如果你以后遇见了那些口口声声师门祖训，有意藏私的，都是心胸狭小之辈，放心鄙视他。'
      }
    ],
    req: [{ value: '学到了！', next: '0010' }]
  },
  '0010': {
    res: [
      { user: 'eagle', value: '嗯，今天就说这些，希望你日后好自为之。/抱拳' },
      { user: 'dove', value: '@夜鹰 好自为之 这个词不是偏贬义的吗？' },
      {
        user: 'eagle',
        value: '@白鸽 可是我一时想不到更合适的诶，总之，你懂的！'
      },
      { user: 'sky', value: '/抱拳 你懂你懂' },
      { user: 'fire', value: '/抱拳 都懂都懂' },
      { user: 'leopard', value: '/抱拳 同上同上' },
      { user: 'leaf', value: '/抱拳 同心同心' },
      { user: 'swallow', value: '/抱拳 +1 +1' },
      { user: 'eleven', value: '/抱拳 寿比南山' },
      { user: 'eagle', value: '/捂脸' },
      { user: 'master', value: '/抱拳 吃好喝好，喝好吃好' },
      { user: 'eleven', value: '咦，黄药师？' }
    ],
    req: [{ value: '/抱拳 各位师兄师姐再见！', next: '0011' }]
  },
  '0011': {
    res: [{ user: 'eagle', value: '找我们啊？没空呢，暂且请回吧！' }],
    req: [{ value: '/抱拳 各位师兄师姐再见！', next: '0011' }]
  }
}
