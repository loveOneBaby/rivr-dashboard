import { motion } from 'motion/react'
import { Layers, Droplets, Gem, Vote } from 'lucide-react'

interface Feature {
  icon: typeof Layers
  title: string
  desc: string
}

const FEATURES: Feature[] = [
  {
    icon: Layers,
    title: '智能金库',
    desc: '跨链调度收益的自动复利策略，无锁仓。',
  },
  {
    icon: Droplets,
    title: '流动性质押',
    desc: '质押 RIVR 仍保留流动性——赚取收益而不冻结本金。',
  },
  {
    icon: Gem,
    title: 'NFT 流动性',
    desc: 'NFT 一经入金即可碎片化抵押借贷。',
  },
  {
    icon: Vote,
    title: '治理',
    desc: '通过链上加权投票，塑造协议参数与排放。',
  },
]

function Ecosystem() {
  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-32 bg-[#f0f0f0]">
      <div className="max-w-[1536px] mx-auto flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mb-6"
        >
          <Layers className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
          <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
            生态
          </span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#5E6470] tracking-tight leading-[1.05] text-center max-w-3xl"
        >
          一个协议，覆盖所有流动资产
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal text-center mt-4 mb-12 md:mb-16"
        >
          RIVR 将金库、质押、NFT 与治理整合为单一可组合层——让资本永不停滞。
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="flex flex-col gap-3 p-5 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] bg-white/40 backdrop-blur-xl border border-white/20 hover:bg-white/60 transition-colors"
            >
              <div className="bg-[rgba(30,50,90,0.05)] w-11 h-11 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]">
                <feature.icon className="w-5 h-5 text-[rgba(30,50,90,0.8)]" />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-normal text-[rgba(30,50,90,0.95)] tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[13px] md:text-[14px] font-normal text-[rgba(30,50,90,0.6)] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
