"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Calendar, MapPin, Users, Award, Github, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import TerminalText from "@/components/terminal-text"

export default function Home() {
  const { scrollY } = useScroll()
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(18, 18, 18, 0)", "rgba(18, 18, 18, 0.9)"])
  const navShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.2)"])

  const [activeSection, setActiveSection] = useState("home")
  // Update the hackathon date to late May
  const hackathonDate = new Date("2025-05-26T18:00:00")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "schedule", "prizes", "requirements", "faq", "founders"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-tech-dark text-white">
      {/* Floating Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
        style={{
          backgroundColor: navBackground,
          boxShadow: navShadow,
        }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OCGXhjKSoLmMA5c3lximQipLjDFyZ9.png"
              alt="PANDAHack Logo"
              width={40}
              height={40}
              className="rounded-full border border-tech-accent"
            />
            <span className="font-bold text-xl text-tech-accent">PANDAHack</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {["Home", "About", "Schedule", "Prizes", "Requirements", "FAQ", "Founders"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-all hover:text-tech-accent ${
                  activeSection === item.toLowerCase()
                    ? "border-b-2 border-tech-accent text-tech-accent"
                    : "text-gray-300"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <Button
            variant="outline"
            className="bg-transparent border-tech-accent text-tech-accent hover:bg-tech-accent/20 md:hidden"
          >
            Menu
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden circuit-bg"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-tech-darker to-tech-dark/90"></div>
        <div className="absolute inset-0 z-0 grid-bg"></div>

        <div className="container mx-auto text-center z-10 px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 mx-auto"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OCGXhjKSoLmMA5c3lximQipLjDFyZ9.png"
              alt="PANDAHack Logo"
              width={150}
              height={150}
              className="mx-auto rounded-full border-2 border-tech-accent shadow-lg shadow-tech-accent/20"
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-tech-accent">PANDA</span>Hack 2025
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <TerminalText
              text="Innovate. Collaborate. Create. Join us for 48 hours of coding, creativity, and bamboo-zling prizes!"
              typingSpeed={30}
              className="max-w-2xl mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10"
          >
            <CountdownTimer targetDate={hackathonDate} />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="bg-tech-accent text-black hover:bg-tech-accent/80 text-lg px-8 py-6">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="border-tech-accent text-tech-accent hover:bg-tech-accent/20 text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-tech-accent"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-tech-darker relative overflow-hidden">
        <div className="absolute inset-0 z-0 circuit-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2 text-tech-accent">About PANDAHack</h2>
            <div className="w-20 h-1 bg-tech-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-4 text-gray-300">
                  PANDAHack 2025 is an exciting workshop series designed to challenge participants to innovate and build
                  solutions that enhance productivity. In today's fast-paced world, productivity is at the core of
                  personal and professional success. This year's program focuses on creating tools, platforms, and
                  solutions that can streamline workflows, automate tasks, and help users achieve more in less time.
                </p>
                <p className="text-lg mb-4 text-gray-300">
                  Whether you're developing software that improves team collaboration, tools that optimize time
                  management, or platforms that boost operational efficiency, this workshop series is your chance to
                  showcase your creativity and technical skills. Participants will attend 1-2 weekly workshops from late
                  May to late June, with guided mentorship and collaborative sessions.
                </p>
                <p className="text-lg mb-4 text-gray-300">
                  With no restrictions on technology or platform, PANDAHack 2025 is open to a wide range of innovative
                  ideas and approaches. We welcome participants of all skill levels to collaborate, learn, and push the
                  boundaries of what's possible in enhancing productivity.
                </p>
                <p className="text-lg text-gray-300">
                  Join us for this opportunity to make an impact, challenge yourself, and contribute to a future where
                  productivity is redefined!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-tech-dark border border-tech-accent/30 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-400 ml-2">terminal</span>
                </div>
                <div className="font-mono text-sm text-tech-accent">
                  <p>$ ./pandahack --info</p>
                  <p className="text-gray-400">{">"} Loading event details...</p>
                  <p className="text-gray-400">{">"} 5 weeks of workshops</p>
                  <p className="text-gray-400">{">"} 1-2 sessions per week</p>
                  <p className="text-gray-400">{">"} 200+ participants</p>
                  <p className="text-gray-400">{">"} $10,000 in prizes</p>
                  <p className="text-gray-400">{">"} Expert mentorship</p>
                  <p>$ _</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-tech-dark border border-tech-accent/30 p-6 rounded-lg text-center hover:border-tech-accent transition-all duration-300">
                  <Calendar className="mx-auto mb-2 text-tech-accent" size={32} />
                  <h4 className="font-bold text-white">May 26 - June 30</h4>
                  <p className="text-gray-400">5 Weeks</p>
                </div>
                <div className="bg-tech-dark border border-tech-accent/30 p-6 rounded-lg text-center hover:border-tech-accent transition-all duration-300">
                  <MapPin className="mx-auto mb-2 text-tech-accent" size={32} />
                  <h4 className="font-bold text-white">Tech Campus</h4>
                  <p className="text-gray-400">& Virtual</p>
                </div>
                <div className="bg-tech-dark border border-tech-accent/30 p-6 rounded-lg text-center hover:border-tech-accent transition-all duration-300">
                  <Users className="mx-auto mb-2 text-tech-accent" size={32} />
                  <h4 className="font-bold text-white">200+ Hackers</h4>
                  <p className="text-gray-400">All Welcome</p>
                </div>
                <div className="bg-tech-dark border border-tech-accent/30 p-6 rounded-lg text-center hover:border-tech-accent transition-all duration-300">
                  <Award className="mx-auto mb-2 text-tech-accent" size={32} />
                  <h4 className="font-bold text-white">$10,000</h4>
                  <p className="text-gray-400">In Prizes</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-tech-dark border border-tech-accent/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Zap className="text-tech-accent mr-2" size={24} />
                XR DOJO - Our Sponsor
              </h3>
              <p className="text-gray-300 mb-4">
                We want to thank this year's sponsor XR DOJO for their help in curating PANDAHack 2025. A big shoutout
                to them!
              </p>
              <div className="p-4 bg-tech-darker rounded-lg border border-tech-accent/20 italic text-gray-300">
                "XR DOJO is a marketing agency where we eXtend Reality (XR) via augmented and virtual reality
                experiences, websites, mobile apps, and interactive event activations to tell Brand stories and
                educate/train employees & potential customers in fun and truly engaging ways. Learn more by visiting
                xrdojo.com."
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-tech-dark relative">
        <div className="absolute inset-0 z-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2 text-tech-accent">Workshop Schedule</h2>
            <div className="w-20 h-1 bg-tech-accent mx-auto"></div>
            <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-300">
              Join us for a series of workshops designed to help you build amazing productivity tools. Each session
              builds on the previous one, but you can also join individual workshops.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Week 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-tech-accent text-black flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Week 1: Kickoff & Ideation</h3>
                  <p className="text-gray-400">May 26-30, 2025</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 ml-16">
                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Workshop 1: Introduction & Ideation</h4>
                    <span className="text-sm text-gray-400">Monday, May 26</span>
                  </div>
                  <p className="text-gray-300">
                    Introduction to the program, team formation, and brainstorming productivity solutions.
                  </p>
                </div>

                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Workshop 2: Project Planning</h4>
                    <span className="text-sm text-gray-400">Thursday, May 29</span>
                  </div>
                  <p className="text-gray-300">
                    Learn how to scope your project, create wireframes, and plan your development approach.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Week 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-tech-accent text-black flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Week 2: Design & UX</h3>
                  <p className="text-gray-400">June 2-6, 2025</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 ml-16">
                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Workshop 3: UX Design for Productivity</h4>
                    <span className="text-sm text-gray-400">Monday, June 2</span>
                  </div>
                  <p className="text-gray-300">
                    Learn principles of UX design specifically for productivity applications.
                  </p>
                </div>

                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Workshop 4: Prototyping</h4>
                    <span className="text-sm text-gray-400">Thursday, June 5</span>
                  </div>
                  <p className="text-gray-300">Create interactive prototypes of your productivity solution.</p>
                </div>
              </div>
            </motion.div>

            {/* Week 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-tech-accent text-black flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Week 3: Development</h3>
                  <p className="text-gray-400">June 9-13, 2025</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 ml-16">
                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Workshop 5: Frontend Development</h4>
                    <span className="text-sm text-gray-400">Monday, June 9</span>
                  </div>
                  <p className="text-gray-300">
                    Build responsive and accessible interfaces for your productivity tool.
                  </p>
                </div>

                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Workshop 6: Backend & APIs</h4>
                    <span className="text-sm text-gray-400">Thursday, June 12</span>
                  </div>
                  <p className="text-gray-300">Implement the backend functionality and integrate with relevant APIs.</p>
                </div>
              </div>
            </motion.div>

            {/* Week 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-tech-accent text-black flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Week 4: Testing & Refinement</h3>
                  <p className="text-gray-400">June 16-20, 2025</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 ml-16">
                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Workshop 7: Testing & Feedback</h4>
                    <span className="text-sm text-gray-400">Monday, June 16</span>
                  </div>
                  <p className="text-gray-300">
                    Learn how to test your application and gather user feedback effectively.
                  </p>
                </div>

                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Workshop 8: Refinement</h4>
                    <span className="text-sm text-gray-400">Thursday, June 19</span>
                  </div>
                  <p className="text-gray-300">
                    Refine your project based on testing and feedback. Prepare for final presentation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Week 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-tech-accent text-black flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Week 5: Final Presentations</h3>
                  <p className="text-gray-400">June 23-30, 2025</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 ml-16">
                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Workshop 9: Presentation Skills</h4>
                    <span className="text-sm text-gray-400">Monday, June 23</span>
                  </div>
                  <p className="text-gray-300">
                    Learn how to effectively present your project and demonstrate its value.
                  </p>
                </div>

                <div className="bg-tech-dark border border-tech-accent/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-tech-accent">Final Demo Day</h4>
                    <span className="text-sm text-gray-400">Monday, June 30</span>
                  </div>
                  <p className="text-gray-300">
                    Present your finished project to judges, mentors, and peers. Awards ceremony.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-tech-darker relative">
        <div className="absolute inset-0 z-0 circuit-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2 text-tech-accent">Awesome Prizes</h2>
            <div className="w-20 h-1 bg-tech-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { place: "1st Place", prize: "$5,000", extras: "Plus mentorship opportunities and tech gadgets" },
              { place: "2nd Place", prize: "$3,000", extras: "Plus cloud credits and software licenses" },
              { place: "3rd Place", prize: "$1,500", extras: "Plus swag packages and online courses" },
            ].map((prize, index) => (
              <motion.div
                key={prize.place}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg border-2 ${index === 0 ? "border-tech-accent bg-tech-dark shadow-lg shadow-tech-accent/20" : "border-tech-accent/30 bg-tech-dark"}`}
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl font-bold ${index === 0 ? "bg-tech-accent text-black" : "bg-tech-dark text-tech-accent border border-tech-accent"}`}
                  >
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">{prize.place}</h3>
                <p className="text-3xl font-bold text-center mb-4 text-tech-accent">{prize.prize}</p>
                <p className="text-center text-gray-300">{prize.extras}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg mb-4 text-gray-300">
              Additional category prizes for Best UI/UX, Most Innovative, and Social Impact
            </p>
            <Button className="bg-tech-accent text-black hover:bg-tech-accent/80">View All Prizes</Button>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-20 bg-tech-dark relative">
        <div className="absolute inset-0 z-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2 text-tech-accent">Requirements</h2>
            <div className="w-20 h-1 bg-tech-accent mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="bg-tech-dark border border-tech-accent/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-tech-accent">What To Build</h3>
                <p className="text-gray-300 mb-4">
                  For PANDAHack 2025, participants are encouraged to build solutions that center around the theme of
                  productivity. Throughout our workshop series, you'll develop a project that aims to improve
                  efficiency, streamline workflows, or help individuals and teams accomplish tasks more effectively.
                  Whether you focus on automating repetitive tasks, enhancing team collaboration, or developing
                  innovative tools that boost output, your solution should offer measurable benefits in productivity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="bg-tech-dark border border-tech-accent/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-tech-accent">What To Submit</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">1) Project Demo</h4>
                    <p className="text-gray-300">
                      Prepare a live demonstration of your project (5-7 minutes) for the final Demo Day. You'll showcase
                      your project's functionality, key features, and how it improves productivity. For those who cannot
                      attend in person, you may submit a demo video instead.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">2) Related Files</h4>
                    <p className="text-gray-300">
                      Upload your project's code, executable files, or any other necessary components directly to the
                      submission platform. Ensure that your submission is well-organized and includes all the files
                      required to run or review the project. If you're using a public repository (e.g., GitHub), include
                      a link to the repository in your submission.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">3) README File</h4>
                    <p className="text-gray-300">
                      Include a comprehensive README file that explains everything about your project. This should
                      include:
                    </p>
                    <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-1">
                      <li>Project Overview: A description of the project and its main goals.</li>
                      <li>Tech Stack: The technologies, languages, frameworks, or tools used.</li>
                      <li>Setup Instructions: Step-by-step instructions on how to install, run, or use the project.</li>
                      <li>
                        Key Features: A list of the project's main features and how they contribute to improving
                        productivity.
                      </li>
                      <li>
                        Challenges and Future Improvements: Any challenges faced during development and potential future
                        enhancements.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-tech-darker relative">
        <div className="absolute inset-0 z-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2 text-tech-accent">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-tech-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Who can participate?",
                a: "Anyone! Students, professionals, and hobbyists of all skill levels are welcome to join our workshop series.",
              },
              {
                q: "How much does it cost?",
                a: "Nothing! PANDAHack is completely free to attend. We provide food, drinks, and swag.",
              },
              {
                q: "What should I bring?",
                a: "Your laptop, charger, any hardware you want to hack with, and your creativity!",
              },
              {
                q: "Do I need a team?",
                a: "You can work individually or form a team during our first workshop. Teams of up to 4 people are recommended.",
              },
              {
                q: "What if I'm a beginner?",
                a: "Perfect! Our workshop series is designed to guide you through the entire process, from ideation to final product.",
              },
              { q: "Will there be food?", a: "We provide meals, snacks, and plenty of caffeine to keep you going." },
              {
                q: "Do I need to attend all workshops?",
                a: "While attending all workshops provides the best experience, you can join individual sessions based on your interests and availability.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tech-dark border border-tech-accent/30 p-6 rounded-lg hover:border-tech-accent transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-tech-accent">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-lg text-gray-300">Still have questions?</p>
            <Button variant="outline" className="mt-4 border-tech-accent text-tech-accent hover:bg-tech-accent/20">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 bg-tech-dark relative">
        <div className="absolute inset-0 z-0 circuit-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2 text-tech-accent">Our Founders</h2>
            <div className="w-20 h-1 bg-tech-accent mx-auto"></div>
            <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">
              Meet the visionary individuals who brought PANDAHack to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-tech-dark border border-tech-accent p-8 rounded-lg shadow-lg shadow-tech-accent/10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-tech-darker border-2 border-tech-accent mb-4 overflow-hidden">
                  {/* Placeholder image - you can replace with actual photo if available */}
                  <div className="w-full h-full flex items-center justify-center text-tech-accent text-4xl font-bold">PC</div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-tech-accent">Prajit Chennupati</h3>
                <p className="text-gray-300 mb-4">Co-Founder & Lead Developer</p>
                <p className="text-gray-300">
                  Passionate about technology and innovation, Prajit envisioned PANDAHack as a platform to bring together creative minds 
                  and foster collaboration in the tech community.
                </p>
                <div className="flex mt-4 gap-3">
                  <a href="#" className="text-tech-accent hover:text-tech-accent/80">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-tech-accent hover:text-tech-accent/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-tech-dark border border-tech-accent p-8 rounded-lg shadow-lg shadow-tech-accent/10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-tech-darker border-2 border-tech-accent mb-4 overflow-hidden">
                  {/* Placeholder image - you can replace with actual photo if available */}
                  <div className="w-full h-full flex items-center justify-center text-tech-accent text-4xl font-bold">SA</div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-tech-accent">Shrey Agarwal</h3>
                <p className="text-gray-300 mb-4">Co-Founder & Creative Director</p>
                <p className="text-gray-300">
                  With a keen eye for design and strategy, Shrey has been instrumental in shaping PANDAHack's vision and 
                  creating an engaging experience for all participants.
                </p>
                <div className="flex mt-4 gap-3">
                  <a href="#" className="text-tech-accent hover:text-tech-accent/80">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-tech-accent hover:text-tech-accent/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-300">Interested in joining the PANDAHack team?</p>
            <Button variant="outline" className="mt-4 border-tech-accent text-tech-accent hover:bg-tech-accent/20">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-tech-darker text-gray-300 border-t border-tech-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OCGXhjKSoLmMA5c3lximQipLjDFyZ9.png"
                alt="PANDAHack Logo"
                width={40}
                height={40}
                className="rounded-full border border-tech-accent"
              />
              <span className="font-bold text-xl text-tech-accent">PANDAHack</span>
            </div>

            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="https://panda-hacks.devpost.com" target="_blank" rel="noopener noreferrer" className="hover:text-tech-accent transition-colors flex items-center gap-2">
                <span className="font-medium">Devpost</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <div className="text-sm">&copy; {new Date().getFullYear()} PANDAHack. All rights reserved.</div>
          </div>

          <div className="mt-6 pt-6 border-t border-tech-accent/10 text-center text-xs text-gray-500">
            <p>Built with 💻 by the PANDAHack Team</p>
            <div className="mt-2 font-mono">
              <span className="text-tech-accent">if</span> (<span className="text-yellow-500">you</span>.
              <span className="text-purple-400">love</span>(<span className="text-tech-accent">coding</span>)) {"{"}
              <span className="text-yellow-500">join</span>(<span className="text-tech-accent">pandaHack</span>);{"}"}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

