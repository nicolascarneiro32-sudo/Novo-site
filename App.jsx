import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { MessageCircle, Linkedin, Instagram, Phone, Mail, MapPin, Clock, Users, Heart, Brain, Lightbulb, Shield, Star, Menu, X } from 'lucide-react'
import './App.css'

// Importando as imagens
import fotoPrincipal from './assets/IMG-20250416-WA003j6-EDIT.JPG'
import fotoCasual from './assets/IMG-20250224-WA0010.jpg'
import mandala from './assets/Minhamandala.png'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Intersection Observer para animações
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={mandala} alt="Logo" className="w-12 h-12 floating-animation" />
            <span className="text-xl font-bold heading-gradient">Psicólogo Junguiano</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-all duration-300 hover:scale-105">Início</a>
            <a href="#sobre" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-all duration-300 hover:scale-105">Sobre Mim</a>
            <a href="#servicos" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-all duration-300 hover:scale-105">Serviços</a>
            <a href="#depoimentos" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-all duration-300 hover:scale-105">Depoimentos</a>
            <a href="#contato" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-all duration-300 hover:scale-105">Contato</a>
          </nav>

          {/* Desktop CTA */}
          <Button 
            className="hidden md:flex btn-gradient text-white"
            onClick={() => window.open('https://wa.me/5535988429102', '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu ${mobileMenuOpen ? 'open' : ''} fixed top-16 left-0 w-full h-screen glass-effect z-40`}>
          <nav className="flex flex-col space-y-6 p-6">
            <a href="#inicio" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-colors text-lg" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="#sobre" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-colors text-lg" onClick={() => setMobileMenuOpen(false)}>Sobre Mim</a>
            <a href="#servicos" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-colors text-lg" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
            <a href="#depoimentos" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-colors text-lg" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
            <a href="#contato" className="text-[var(--azul-marinho)] hover:text-[var(--terracota)] transition-colors text-lg" onClick={() => setMobileMenuOpen(false)}>Contato</a>
            <Button 
              className="btn-gradient text-white mt-4"
              onClick={() => {
                window.open('https://wa.me/5535988429102', '_blank')
                setMobileMenuOpen(false)
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 mandala-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <div className="image-frame rounded-full w-48 h-48 mx-auto mb-8 overflow-hidden">
              <img 
                src={fotoPrincipal} 
                alt="Psicólogo" 
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold heading-gradient mb-6 text-shadow">
              Transforme sua jornada interior
            </h1>
            <p className="text-xl text-[var(--cinza-suave)] mb-8 max-w-2xl mx-auto">
              Psicologia Junguiana para descobrir seu verdadeiro eu. Atendimento online e presencial 
              com abordagem humanizada e acolhedora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="btn-gradient text-white pulse-animation"
                onClick={() => window.open('https://wa.me/5535988429102', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button 
                size="lg"
                className="btn-outline-gradient"
                onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 px-4 glass-effect">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold heading-gradient mb-6">Sobre Mim</h2>
              <p className="text-lg text-[var(--cinza-suave)] mb-6">
                Sou psicólogo clínico fundamentado na psicologia analítica junguiana, abordagem que considera os símbolos, os sonhos e a imaginação como expressões importantes da vida psíquica. Ao longo da minha trajetória, percebi que meus interesses em cinema, literatura, filosofia, história e música não são apenas hobbies, mas também ferramentas que ampliam meu olhar sobre a experiência humana. Essas referências me ajudam a compreender com mais riqueza os diferentes modos como as pessoas dão sentido às suas vidas e atravessam seus desafios. No consultório, busco criar um espaço seguro, ético e acolhedor, em que seja possível o fortalecimento de um vínculo verdadeiro entre paciente e terapeuta.

Acredito que a escuta atenta e respeitosa abre caminhos para que cada pessoa possa entrar em contato com seus próprios conteúdos internos e, assim, elaborar novas formas de estar no mundo. Meu compromisso é oferecer um ambiente que favoreça o autoconhecimento, o diálogo e a possibilidade de transformação, respeitando sempre o tempo e a singularidade de cada processo. Se você deseja compreender melhor quem é, aprofundar-se em sua própria história ou encontrar novos recursos para lidar com as demandas da vida, estarei à disposição para caminhar ao seu lado nesse percurso.
              </p>
              <p className="text-lg text-[var(--cinza-suave)] mb-6">
                De modo geral, os atendimentos acontecem em sessões semanais, com duração aproximada de 50 minutos. Esse espaço é reservado para que você possa falar livremente sobre seus sentimentos, pensamentos, sonhos e experiências. O ritmo e o foco do processo são construídos juntos, respeitando seu tempo, suas necessidades e seus objetivos. A psicoterapia é um processo gradual, que se desenvolve no diálogo constante entre paciente e terapeuta. Não se trata de oferecer respostas prontas, mas de favorecer a reflexão, o autoconhecimento e a construção de novos caminhos diante dos desafios da vida.

Na abordagem junguiana, cada pessoa é vista como um ser em constante desenvolvimento, em busca de se tornar quem realmente é — um processo chamado individuação. Durante os atendimentos, aspectos conscientes e inconscientes são trabalhados, considerando não apenas as dificuldades imediatas, mas também os símbolos, imagens e sonhos que surgem no percurso. Os atendimentos não se limitam a resolver problemas pontuais: eles convidam a um mergulho mais profundo, ajudando a integrar diferentes partes da psique, encontrar novos significados e cultivar uma relação mais autêntica consigo mesmo e com o mundo.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-[var(--terracota)]" />
                  <span className="text-[var(--azul-marinho)]">CRP 04/80771</span>
                </div>
                </div>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="image-frame rounded-2xl overflow-hidden box-shadow-soft">
                <img 
                  src={fotoCasual} 
                  alt="Psicólogo em ambiente natural" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 opacity-20 floating-animation">
                <img src={mandala} alt="Mandala decorativa" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades de Atendimento */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold heading-gradient mb-12 animate-on-scroll">Modalidades de Atendimento</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover gradient-border animate-on-scroll">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--verde-musgo)] to-[var(--verde-escuro)] rounded-full flex items-center justify-center mx-auto mb-4 service-icon">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--azul-marinho)] mb-4">Presencial</h3>
                <p className="text-[var(--cinza-suave)] mb-4">
                  Atendimento em consultório acolhedor, proporcionando um ambiente seguro 
                  e privativo para sua jornada de autoconhecimento.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[var(--terracota)]">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo - SP</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover gradient-border animate-on-scroll">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--terracota)] to-[var(--marrom-claro)] rounded-full flex items-center justify-center mx-auto mb-4 service-icon">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--azul-marinho)] mb-4">Online</h3>
                <p className="text-[var(--cinza-suave)] mb-4">
                  Sessões por videochamada com a mesma qualidade do atendimento presencial, 
                  oferecendo flexibilidade e comodidade.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[var(--terracota)]">
                  <Clock className="w-4 h-4" />
                  <span>Horários flexíveis</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-4 glass-effect">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold heading-gradient text-center mb-12 animate-on-scroll">Com o que trabalho</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Ansiedade", desc: "Técnicas para gerenciar e superar a ansiedade" },
              { icon: Brain, title: "Depressão", desc: "Apoio no processo de recuperação emocional" },
              { icon: Users, title: "Relacionamentos", desc: "Melhoria nas relações interpessoais" },
              { icon: Lightbulb, title: "Autoconhecimento", desc: "Descoberta do seu verdadeiro potencial" },
              { icon: Shield, title: "Traumas", desc: "Processamento e cura de experiências difíceis" },
              { icon: Star, title: "Desenvolvimento Pessoal", desc: "Crescimento e evolução contínua" },
              { icon: Heart, title: "Luto", desc: "Acompanhamento em processos de perda" },
              { icon: Brain, title: "Estresse", desc: "Estratégias para lidar com pressões do dia a dia" }
            ].map((servico, index) => (
              <Card key={index} className="card-hover service-card gradient-border animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--terracota)] to-[var(--marrom-claro)] rounded-full flex items-center justify-center mx-auto mb-4 service-icon">
                    <servico.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--azul-marinho)] mb-2">{servico.title}</h3>
                  <p className="text-sm text-[var(--cinza-suave)]">{servico.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold heading-gradient mb-12 animate-on-scroll">Depoimentos</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                nome: "Maria Silva",
                texto: "O atendimento transformou minha vida. Encontrei clareza e paz interior que não sabia que era possível.",
                estrelas: 5
              },
              {
                nome: "João Santos",
                texto: "Profissional excepcional, com uma abordagem humanizada que me ajudou a superar momentos difíceis.",
                estrelas: 5
              },
              {
                nome: "Ana Costa",
                texto: "Recomendo de olhos fechados. O trabalho junguiano me proporcionou um autoconhecimento profundo.",
                estrelas: 5
              }
            ].map((depoimento, index) => (
              <Card key={index} className="testimonial-card card-hover animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(depoimento.estrelas)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[var(--terracota)] text-[var(--terracota)]" />
                    ))}
                  </div>
                  <p className="text-[var(--cinza-suave)] mb-4 italic">"{depoimento.texto}"</p>
                  <p className="font-bold text-[var(--azul-marinho)]">{depoimento.nome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-4 glass-effect">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold heading-gradient mb-6">Entre em Contato</h2>
              <p className="text-lg text-[var(--cinza-suave)] mb-8">
                Estou aqui para ajudá-lo em sua jornada de autoconhecimento. 
                Entre em contato para agendar sua consulta.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 hover-scale">
                  <Phone className="w-5 h-5 text-[var(--terracota)]" />
                  <span className="text-[var(--azul-marinho)]">(35) 98842-9102</span>
                </div>
                <div className="flex items-center space-x-3 hover-scale">
                  <Mail className="w-5 h-5 text-[var(--terracota)]" />
                  <span className="text-[var(--azul-marinho)]">nicolascarneiro32@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 hover-scale">
                  <MapPin className="w-5 h-5 text-[var(--terracota)]" />
                  <span className="text-[var(--azul-marinho)]">Alfenas - MG</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="btn-gradient text-white"
                  onClick={() => window.open('https://wa.me/5535988429102', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  className="btn-outline-gradient"
                  onClick={() => window.open('https://linkedin.com/in/nicolas-buttrós-5a512a219', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  className="btn-outline-gradient"
                  onClick={() => window.open('https://instagram.com/psico@buttros', '_blank')}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>

            <Card className="gradient-border animate-on-scroll">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold heading-gradient mb-6">Envie uma Mensagem</h3>
                <form className="space-y-4 contact-form">
                  <div>
                    <Input 
                      placeholder="Seu nome" 
                      className="border-[var(--bege-quente)] focus:border-[var(--terracota)] transition-all"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Seu e-mail" 
                      className="border-[var(--bege-quente)] focus:border-[var(--terracota)] transition-all"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Sua mensagem" 
                      rows={4}
                      className="border-[var(--bege-quente)] focus:border-[var(--terracota)] transition-all"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full btn-gradient text-white"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--azul-marinho)] text-white py-12 px-4 footer-wave">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src={mandala} alt="Logo" className="w-12 h-12 filter brightness-0 invert floating-animation" />
            <span className="text-xl font-bold">Psicólogo Junguiano</span>
          </div>
          <p className="text-gray-300 mb-6">
            Transformando vidas através do autoconhecimento e da psicologia analítica.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#inicio" className="hover:text-[var(--terracota)] transition-colors">Início</a>
            <a href="#sobre" className="hover:text-[var(--terracota)] transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-[var(--terracota)] transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-[var(--terracota)] transition-colors">Contato</a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Psicólogo Junguiano. Todos os direitos reservados. | CRP 04/80771
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

