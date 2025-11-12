"use client";

import { useState, useEffect } from "react";
import { 
  Sparkles, 
  Video, 
  Wand2, 
  Zap, 
  Check, 
  Star,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  Play,
  ChevronRight,
  MessageSquare,
  Mail,
  Youtube,
  Instagram,
  Twitter
} from "lucide-react";

export default function CineForgeAI() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00B4D8] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-[#121212]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#8B5CF6] to-[#00B4D8] rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] bg-clip-text text-transparent">
                CineForge AI
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#recursos" className="text-gray-300 hover:text-white transition-colors">Recursos</a>
              <a href="#planos" className="text-gray-300 hover:text-white transition-colors">Planos</a>
              <a href="#afiliados" className="text-gray-300 hover:text-white transition-colors">Afiliados</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300 hover:scale-105">
                Entrar
              </button>
            </div>
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-xs sm:text-sm text-gray-300">Powered by Advanced AI Technology</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#8B5CF6] to-[#00B4D8] bg-clip-text text-transparent">
              Transforme Suas Ideias
            </span>
            <br />
            <span className="text-white">em Vídeos Incríveis</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Com o CineForge AI, você cria vídeos profissionais para YouTube, Reels, Shorts e TikTok em minutos — com legendas automáticas, vozes realistas, transições cinematográficas e efeitos visuais de última geração.
            <span className="block mt-4 text-[#8B5CF6] font-semibold">Tudo isso sem precisar editar nada.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#8B5CF6]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Video className="w-5 h-5" />
              Começar Agora — É Grátis!
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Ver Demonstração
            </button>
          </div>

          {/* Video Preview Mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#8B5CF6]/20">
              <div className="aspect-video bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#8B5CF6] to-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 ml-1" />
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base px-4">Clique para ver a plataforma em ação</p>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] rounded-2xl blur-xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Crie Vídeos Épicos em{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] bg-clip-text text-transparent">
                3 Passos Simples
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Escreva ou cole seu roteiro",
                description: "Dê à IA uma ideia, um texto ou um áudio.",
                color: "#8B5CF6"
              },
              {
                step: "02",
                icon: Wand2,
                title: "Escolha o estilo do vídeo",
                description: "Motivacional, educativo, comercial, narrativo — você decide.",
                color: "#00B4D8"
              },
              {
                step: "03",
                icon: Zap,
                title: "Gere seu vídeo com um clique",
                description: "Em segundos, o CineForge AI entrega um vídeo completo com legendas, voz e efeitos automáticos.",
                color: "#8B5CF6"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8B5CF6]/20">
                  <div className="text-6xl sm:text-7xl font-bold text-white/5 mb-4">{item.step}</div>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-[${item.color}] to-[#00B4D8]`}>
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                {/* Connection Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-6 lg:w-12 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8]">
                    <ChevronRight className="absolute -right-2 -top-3 w-6 h-6 text-[#00B4D8]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <p className="text-lg sm:text-xl text-gray-300 flex items-center justify-center gap-2 flex-wrap px-4">
              <ChevronRight className="w-5 h-5 text-[#8B5CF6]" />
              Nunca foi tão fácil criar vídeos que chamam atenção e geram engajamento.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Tudo Que Você Precisa Para Criar{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] bg-clip-text text-transparent">
                Conteúdo de Alto Nível
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Sparkles,
                title: "Inteligência Artificial Criativa",
                description: "Transforma texto em vídeo automaticamente com tecnologia de ponta."
              },
              {
                icon: MessageSquare,
                title: "Vozes Realistas",
                description: "Escolha entre narradores humanos e vozes premium com emoção natural."
              },
              {
                icon: Video,
                title: "Legendas Automáticas",
                description: "Sincronizadas com o áudio e totalmente editáveis."
              },
              {
                icon: Wand2,
                title: "Transições e Efeitos Profissionais",
                description: "Estilo cinematográfico, sem precisar editar manualmente."
              },
              {
                icon: Star,
                title: "Exportação em Alta Resolução",
                description: "Baixe seus vídeos em 1080p ou 4K com qualidade profissional."
              },
              {
                icon: Zap,
                title: "Tudo Online",
                description: "Sem precisar baixar programas pesados. Crie direto no navegador."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#8B5CF6] to-[#00B4D8] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section id="afiliados" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Transforme Seu Conteúdo em{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] bg-clip-text text-transparent">
                Renda
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Torne-se Um Afiliado CineForge AI
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#00B4D8]/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Além de criar vídeos incríveis, você pode ganhar dinheiro promovendo a plataforma.
                  Cada vez que alguém assina um plano através do seu link, você recebe uma comissão automática.
                </p>
                
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                  {[
                    { icon: BarChart3, text: "Painel de afiliado com relatórios em tempo real" },
                    { icon: TrendingUp, text: "Links únicos e rastreáveis" },
                    { icon: Users, text: "Sistema de níveis: Bronze, Prata, Ouro e Diamante" },
                    { icon: DollarSign, text: "Pagamento rápido via Pix" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#8B5CF6] to-[#00B4D8] rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <p className="text-gray-300 pt-2 text-sm sm:text-base">{item.text}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#8B5CF6]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Crie sua conta e ative seu link de afiliado
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="text-4xl sm:text-5xl font-bold text-[#8B5CF6] mb-2">30%</div>
                  <p className="text-gray-400">Comissão Recorrente</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { level: "Bronze", sales: "1-10 vendas", commission: "30%" },
                    { level: "Prata", sales: "11-50 vendas", commission: "35%" },
                    { level: "Ouro", sales: "51-100 vendas", commission: "40%" },
                    { level: "Diamante", sales: "100+ vendas", commission: "50%" }
                  ].map((tier, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div>
                        <div className="font-bold text-sm sm:text-base">{tier.level}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{tier.sales}</div>
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-[#00B4D8]">{tier.commission}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Escolha Seu Plano e{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] bg-clip-text text-transparent">
                Comece a Criar Hoje
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Seja você um criador iniciante ou um profissional, o CineForge AI tem o plano ideal para o seu nível.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Free Plan",
                price: "R$ 0",
                period: "/mês",
                description: "Perfeito para começar",
                features: [
                  "3 vídeos por mês",
                  "Acesso básico à IA",
                  "Exportação em 720p",
                  "Legendas automáticas",
                  "Marca d'água CineForge"
                ],
                cta: "Começar Grátis",
                popular: false
              },
              {
                name: "Pro Plan",
                price: "R$ 97",
                period: "/mês",
                description: "Para criadores sérios",
                features: [
                  "Vídeos ilimitados",
                  "Vozes premium",
                  "Exportação em 1080p e 4K",
                  "Efeitos avançados",
                  "Sem marca d'água",
                  "Suporte prioritário"
                ],
                cta: "Assinar Pro",
                popular: true
              },
              {
                name: "Creator Plus",
                price: "R$ 197",
                period: "/mês",
                description: "Para profissionais",
                features: [
                  "Tudo do Pro Plan",
                  "Prioridade de renderização",
                  "API de integração",
                  "Acesso antecipado",
                  "Gerente de conta dedicado",
                  "Treinamento exclusivo"
                ],
                cta: "Assinar Creator Plus",
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border ${plan.popular ? 'border-[#8B5CF6] scale-105' : 'border-white/10'} rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] rounded-full text-sm font-bold">
                    Mais Popular
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 mb-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] hover:shadow-2xl hover:shadow-[#8B5CF6]/50' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <button className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#8B5CF6]/50 transition-all duration-300 hover:scale-105">
              🚀 Assine Agora e Crie Vídeos Incríveis em Minutos!
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              O Que{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] bg-clip-text text-transparent">
                Criadores Reais
              </span>
              {" "}Estão Dizendo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "O CineForge AI mudou totalmente meu processo de criação. Faço vídeos para o YouTube 5x mais rápido.",
                author: "Lucas Almeida",
                role: "Criador de Conteúdo",
                avatar: "LA"
              },
              {
                quote: "Parece mágica! Eu só escrevo meu texto e tenho um vídeo completo, com voz e tudo!",
                author: "Carla Menezes",
                role: "Influencer Digital",
                avatar: "CM"
              },
              {
                quote: "Além de usar, ainda ganho dinheiro como afiliado! É uma renda extra incrível.",
                author: "João Prado",
                role: "Editor Freelancer",
                avatar: "JP"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#8B5CF6] text-[#8B5CF6]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#00B4D8] rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#8B5CF6]/20 to-[#00B4D8]/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-[#00B4D8]/10 animate-pulse"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Crie. Inspire. Lucre.
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] bg-clip-text text-transparent">
                Tudo com o CineForge AI.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                A nova era dos vídeos automáticos já começou.
                Não perca mais tempo com edições demoradas.
                Deixe a IA fazer o trabalho pesado por você e concentre-se no que realmente importa: suas ideias.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#8B5CF6] to-[#00B4D8] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#8B5CF6]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Video className="w-6 h-6" />
                  Comece Agora Gratuitamente
                </button>
              </div>

              <p className="text-sm text-gray-400 mt-6">
                🕒 Leva menos de 60 segundos para criar sua conta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-[#0a0a0a] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#00B4D8] rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">CineForge AI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforme palavras em vídeos épicos com o poder da Inteligência Artificial.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Produto</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#recursos" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
                <li><a href="#afiliados" className="text-gray-400 hover:text-white transition-colors">Afiliados</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Suporte</h3>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-2 text-gray-400">
                  <MessageSquare className="w-4 h-4" />
                  Chat com IA
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  suporte@cineforge.ai
                </li>
              </ul>
              
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 CineForge AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
