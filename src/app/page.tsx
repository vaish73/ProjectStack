import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Users,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AgencyLanding() {
  return (
    <div className="min-w-full overflow-hidden relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/*Navbar*/}
      

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-900/50 text-blue-300 hover:bg-blue-900/50 border border-blue-700">
                  🚀 Transforming Ideas into Digital Reality
                </Badge>
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-white">
                  Build the{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Future
                  </span>{" "}
                  of Your Business
                </h1>
                <p className="md:text-xl text-sm  text-slate-300 leading-relaxed">
                  We craft cutting-edge digital solutions that drive growth, enhance user experience,<br/> and position your
                  business at the forefront of innovation.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  View Our Work
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-slate-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-slate-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-slate-400">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Digital Innovation"
                width={600}
                height={600}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-900/50 text-blue-300 border border-blue-700">Our Expertise</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Comprehensive Development Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end solutions that scale with your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Web Development",
                description:
                  "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.",
                features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
                features: ["iOS & Android", "React Native", "Flutter"],
              },
              {
                icon: Database,
                title: "Backend Development",
                description: "Scalable server-side solutions with robust APIs and database architecture.",
                features: ["RESTful APIs", "Database Design", "Cloud Integration"],
              },
              {
                icon: Shield,
                title: "DevOps & Security",
                description: "Secure deployment pipelines and infrastructure management for reliable operations.",
                features: ["CI/CD Pipelines", "Security Audits", "Cloud Deployment"],
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Speed up your applications with advanced optimization techniques and monitoring.",
                features: ["Code Optimization", "Caching Strategies", "Monitoring"],
              },
              {
                icon: Users,
                title: "Consulting & Strategy",
                description: "Technical consulting to help you make informed decisions about your technology stack.",
                features: ["Architecture Review", "Technology Selection", "Best Practices"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border border-slate-700 shadow-lg bg-slate-900/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-900/50 text-blue-300 border border-blue-700">Why Choose Us</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-white">Your Success is Our Mission</h2>
              <p className="text-lg text-slate-300">
                With years of experience and a passion for innovation, we <br/> deliver solutions that not only meet your
                current needs but also prepare you for future growth.
              </p>

              <div className="space-y-4">
                {[
                  "Agile development methodology for faster delivery",
                  "Dedicated project managers for seamless communication",
                  "Post-launch support and maintenance included",
                  "Transparent pricing with no hidden costs",
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-slate-300">{point}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                Learn More About Us
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400">5+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </Card>
                <Card className="p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-slate-400">Team Members</div>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400">100+</div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </Card>
                <Card className="p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-slate-400">Support</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collaboration" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-900/50 text-blue-300 border border-blue-700">Partnership</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Let&apos;s Build Something Amazing Together</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We believe in collaborative partnerships that drive innovation and create lasting value for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We start by understanding your vision, goals, and requirements through detailed consultation.",
              },
              {
                step: "02",
                title: "Design & Development",
                description: "Our team creates prototypes and develops your solution using industry best practices.",
              },
              {
                step: "03",
                title: "Launch & Support",
                description: "We deploy your project and provide ongoing support to ensure continued success.",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="text-center p-8 border border-slate-700 shadow-lg hover:shadow-xl transition-shadow bg-slate-900/50 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-3xl p-8 lg:p-12 border border-slate-700">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">What Our Clients Say</h3>
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Client"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">Sarah Johnson</div>
                    <div className="text-sm text-slate-400">CEO, TechStart Inc.</div>
                  </div>
                </div>
                <p className="text-slate-300 italic">
                  &qout;DevCraft transformed our vision into reality. Their expertise and dedication exceeded our
                  expectations.&qout;
                </p>
              </Card>

              <Card className="p-6 border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Client"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">Michael Chen</div>
                    <div className="text-sm text-slate-400">CTO, InnovateLab</div>
                  </div>
                </div>
                <p className="text-slate-300 italic">
                  &qoout;Outstanding technical expertise and project management. They delivered on time and within budget.&qout;
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Us - Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-800/50 text-blue-300 mb-4 border border-blue-700">Get In Touch</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl text-slate-300">
                  Let&apos;s discuss how we can help bring your ideas to life. Get in touch for a free consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-slate-300">hello@devcraft.agency</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-slate-300">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-slate-300">123 Innovation Street, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                <CardDescription className="text-slate-300">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Project Type</label>
                  <Select>
                    <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="backend">Backend Development</SelectItem>
                      <SelectItem value="fullstack">Full Stack Solution</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                  <Textarea
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                    rows={4}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/*Footer Component*/}

    </div>
  )
}
