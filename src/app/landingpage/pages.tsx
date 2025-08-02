import { Button } from &quot;@/components/ui/button&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Textarea } from &quot;@/components/ui/textarea&quot;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;
import { Badge } from &quot;@/components/ui/badge&quot;
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
} from &quot;lucide-react&quot;
import Image from &quot;next/image&quot;
import Link from &quot;next/link&quot;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;

export default function AgencyLanding() {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
      {/* Navigation */}
      <nav className=&quot;sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700&quot;>
        <div className=&quot;container mx-auto px-4 lg:px-6&quot;>
          <div className=&quot;flex items-center justify-between h-16&quot;>
            <div className=&quot;flex items-center space-x-2&quot;>
              <div className=&quot;w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center&quot;>
                <Code className=&quot;w-5 h-5 text-white&quot; />
              </div>
              <span className=&quot;text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent&quot;>
                ProjectStack
              </span>
            </div>

            <div className=&quot;hidden md:flex items-center space-x-8&quot;>
              <Link href=&quot;#services&quot; className=&quot;text-slate-300 hover:text-blue-400 transition-colors&quot;>
                Services
              </Link>
              <Link href=&quot;#about&quot; className=&quot;text-slate-300 hover:text-blue-400 transition-colors&quot;>
                About
              </Link>
              <Link href=&quot;#collaboration&quot; className=&quot;text-slate-300 hover:text-blue-400 transition-colors&quot;>
                Collaboration
              </Link>
              <Link href=&quot;#contact&quot; className=&quot;text-slate-300 hover:text-blue-400 transition-colors&quot;>
                Contact
              </Link>
              <Button className=&quot;bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600&quot;>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className=&quot;py-20 lg:py-32&quot;>
        <div className=&quot;container mx-auto px-4 lg:px-6&quot;>
          <div className=&quot;grid lg:grid-cols-2 gap-12 items-center&quot;>
            <div className=&quot;space-y-8&quot;>
              <div className=&quot;space-y-4&quot;>
                <Badge className=&quot;bg-blue-900/50 text-blue-300 hover:bg-blue-900/50 border border-blue-700&quot;>
                  🚀 Transforming Ideas into Digital Reality
                </Badge>
                <h1 className=&quot;text-4xl lg:text-6xl font-bold leading-tight text-white&quot;>
                  Build the{&quot; &quot;}
                  <span className=&quot;bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent&quot;>
                    Future
                  </span>{&quot; &quot;}
                  of Your Business
                </h1>
                <p className=&quot;text-xl text-slate-300 leading-relaxed&quot;>
                  We craft cutting-edge digital solutions that drive growth, enhance user experience, and position your
                  business at the forefront of innovation.
                </p>
              </div>

              <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
                <Button
                  size=&quot;lg&quot;
                  className=&quot;bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600&quot;
                >
                  Start Your Project
                  <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                </Button>
                <Button
                  size=&quot;lg&quot;
                  variant=&quot;outline&quot;
                  className=&quot;border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white&quot;
                >
                  View Our Work
                </Button>
              </div>

              <div className=&quot;flex items-center space-x-8 pt-8&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-2xl font-bold text-white&quot;>500+</div>
                  <div className=&quot;text-sm text-slate-400&quot;>Projects Delivered</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-2xl font-bold text-white&quot;>98%</div>
                  <div className=&quot;text-sm text-slate-400&quot;>Client Satisfaction</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-2xl font-bold text-white&quot;>24/7</div>
                  <div className=&quot;text-sm text-slate-400&quot;>Support</div>
                </div>
              </div>
            </div>

            <div className=&quot;relative&quot;>
              <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-20&quot;></div>
              <Image
                src=&quot;/placeholder.svg?height=600&width=600&quot;
                alt=&quot;Digital Innovation&quot;
                width={600}
                height={600}
                className=&quot;relative rounded-3xl shadow-2xl&quot;
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id=&quot;services&quot; className=&quot;py-20 bg-slate-800&quot;>
        <div className=&quot;container mx-auto px-4 lg:px-6&quot;>
          <div className=&quot;text-center space-y-4 mb-16&quot;>
            <Badge className=&quot;bg-blue-900/50 text-blue-300 border border-blue-700&quot;>Our Expertise</Badge>
            <h2 className=&quot;text-3xl lg:text-5xl font-bold text-white&quot;>Comprehensive Development Services</h2>
            <p className=&quot;text-xl text-slate-300 max-w-3xl mx-auto&quot;>
              From concept to deployment, we provide end-to-end solutions that scale with your business needs.
            </p>
          </div>

          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {[
              {
                icon: Globe,
                title: &quot;Web Development&quot;,
                description:
                  &quot;Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.&quot;,
                features: [&quot;Responsive Design&quot;, &quot;SEO Optimized&quot;, &quot;Fast Performance&quot;],
              },
              {
                icon: Smartphone,
                title: &quot;Mobile Development&quot;,
                description: &quot;Native and cross-platform mobile apps that deliver exceptional user experiences.&quot;,
                features: [&quot;iOS & Android&quot;, &quot;React Native&quot;, &quot;Flutter&quot;],
              },
              {
                icon: Database,
                title: &quot;Backend Development&quot;,
                description: &quot;Scalable server-side solutions with robust APIs and database architecture.&quot;,
                features: [&quot;RESTful APIs&quot;, &quot;Database Design&quot;, &quot;Cloud Integration&quot;],
              },
              {
                icon: Shield,
                title: &quot;DevOps & Security&quot;,
                description: &quot;Secure deployment pipelines and infrastructure management for reliable operations.&quot;,
                features: [&quot;CI/CD Pipelines&quot;, &quot;Security Audits&quot;, &quot;Cloud Deployment&quot;],
              },
              {
                icon: Zap,
                title: &quot;Performance Optimization&quot;,
                description: &quot;Speed up your applications with advanced optimization techniques and monitoring.&quot;,
                features: [&quot;Code Optimization&quot;, &quot;Caching Strategies&quot;, &quot;Monitoring&quot;],
              },
              {
                icon: Users,
                title: &quot;Consulting & Strategy&quot;,
                description: &quot;Technical consulting to help you make informed decisions about your technology stack.&quot;,
                features: [&quot;Architecture Review&quot;, &quot;Technology Selection&quot;, &quot;Best Practices&quot;],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className=&quot;group hover:shadow-2xl transition-all duration-300 border border-slate-700 shadow-lg bg-slate-900/50 backdrop-blur-sm&quot;
              >
                <CardHeader>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform&quot;>
                    <service.icon className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <CardTitle className=&quot;text-xl text-white&quot;>{service.title}</CardTitle>
                  <CardDescription className=&quot;text-slate-300&quot;>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-2&quot;>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-slate-400&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
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

      {/* About Section */}
      <section id=&quot;about&quot; className=&quot;py-20 bg-gradient-to-r from-slate-900 to-slate-800&quot;>
        <div className=&quot;container mx-auto px-4 lg:px-6&quot;>
          <div className=&quot;grid lg:grid-cols-2 gap-12 items-center&quot;>
            <div className=&quot;space-y-6&quot;>
              <Badge className=&quot;bg-blue-900/50 text-blue-300 border border-blue-700&quot;>Why Choose Us</Badge>
              <h2 className=&quot;text-3xl lg:text-5xl font-bold text-white&quot;>Your Success is Our Mission</h2>
              <p className=&quot;text-lg text-slate-300&quot;>
                With years of experience and a passion for innovation, we deliver solutions that not only meet your
                current needs but also prepare you for future growth.
              </p>

              <div className=&quot;space-y-4&quot;>
                {[
                  &quot;Agile development methodology for faster delivery&quot;,
                  &quot;Dedicated project managers for seamless communication&quot;,
                  &quot;Post-launch support and maintenance included&quot;,
                  &quot;Transparent pricing with no hidden costs&quot;,
                ].map((point, index) => (
                  <div key={index} className=&quot;flex items-center&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3&quot; />
                    <span className=&quot;text-slate-300&quot;>{point}</span>
                  </div>
                ))}
              </div>

              <Button className=&quot;bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600&quot;>
                Learn More About Us
              </Button>
            </div>

            <div className=&quot;grid grid-cols-2 gap-4&quot;>
              <div className=&quot;space-y-4&quot;>
                <Card className=&quot;p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm&quot;>
                  <div className=&quot;text-3xl font-bold text-blue-400&quot;>5+</div>
                  <div className=&quot;text-sm text-slate-400&quot;>Years Experience</div>
                </Card>
                <Card className=&quot;p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm&quot;>
                  <div className=&quot;text-3xl font-bold text-blue-400&quot;>50+</div>
                  <div className=&quot;text-sm text-slate-400&quot;>Team Members</div>
                </Card>
              </div>
              <div className=&quot;space-y-4 mt-8&quot;>
                <Card className=&quot;p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm&quot;>
                  <div className=&quot;text-3xl font-bold text-blue-400&quot;>100+</div>
                  <div className=&quot;text-sm text-slate-400&quot;>Happy Clients</div>
                </Card>
                <Card className=&quot;p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm&quot;>
                  <div className=&quot;text-3xl font-bold text-blue-400&quot;>24/7</div>
                  <div className=&quot;text-sm text-slate-400&quot;>Support</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id=&quot;collaboration&quot; className=&quot;py-20 bg-slate-800&quot;>
        <div className=&quot;container mx-auto px-4 lg:px-6&quot;>
          <div className=&quot;text-center space-y-4 mb-16&quot;>
            <Badge className=&quot;bg-blue-900/50 text-blue-300 border border-blue-700&quot;>Partnership</Badge>
            <h2 className=&quot;text-3xl lg:text-5xl font-bold text-white&quot;>Let&apos;s Build Something Amazing Together</h2>
            <p className=&quot;text-xl text-slate-300 max-w-3xl mx-auto&quot;>
              We believe in collaborative partnerships that drive innovation and create lasting value for your business.
            </p>
          </div>

          <div className=&quot;grid md:grid-cols-3 gap-8 mb-16&quot;>
            {[
              {
                step: &quot;01&quot;,
                title: &quot;Discovery & Planning&quot;,
                description:
                  &quot;We start by understanding your vision, goals, and requirements through detailed consultation.&quot;,
              },
              {
                step: &quot;02&quot;,
                title: &quot;Design & Development&quot;,
                description: &quot;Our team creates prototypes and develops your solution using industry best practices.&quot;,
              },
              {
                step: &quot;03&quot;,
                title: &quot;Launch & Support&quot;,
                description: &quot;We deploy your project and provide ongoing support to ensure continued success.&quot;,
              },
            ].map((step, index) => (
              <Card
                key={index}
                className=&quot;text-center p-8 border border-slate-700 shadow-lg hover:shadow-xl transition-shadow bg-slate-900/50 backdrop-blur-sm&quot;
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                  <span className=&quot;text-white font-bold text-lg&quot;>{step.step}</span>
                </div>
                <h3 className=&quot;text-xl font-bold mb-4 text-white&quot;>{step.title}</h3>
                <p className=&quot;text-slate-300&quot;>{step.description}</p>
              </Card>
            ))}
          </div>

          {/* Client Testimonials */}
          <div className=&quot;bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-3xl p-8 lg:p-12 border border-slate-700&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h3 className=&quot;text-2xl lg:text-3xl font-bold mb-4 text-white&quot;>What Our Clients Say</h3>
              <div className=&quot;flex justify-center space-x-1 mb-6&quot;>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className=&quot;w-5 h-5 fill-yellow-400 text-yellow-400&quot; />
                ))}
              </div>
            </div>

            <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
              <Card className=&quot;p-6 border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm&quot;>
                <div className=&quot;flex items-center mb-4&quot;>
                  <Image
                    src=&quot;/placeholder.svg?height=50&width=50&quot;
                    alt=&quot;Client&quot;
                    width={50}
                    height={50}
                    className=&quot;rounded-full mr-4&quot;
                  />
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>Sarah Johnson</div>
                    <div className=&quot;text-sm text-slate-400&quot;>CEO, TechStart Inc.</div>
                  </div>
                </div>
                <p className=&quot;text-slate-300 italic&quot;>
                  &quot;DevCraft transformed our vision into reality. Their expertise and dedication exceeded our
                  expectations.&quot;
                </p>
              </Card>

              <Card className=&quot;p-6 border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm&quot;>
                <div className=&quot;flex items-center mb-4&quot;>
                  <Image
                    src=&quot;/placeholder.svg?height=50&width=50&quot;
                    alt=&quot;Client&quot;
                    width={50}
                    height={50}
                    className=&quot;rounded-full mr-4&quot;
                  />
                  <div>
                    <div className=&quot;font-semibold text-white&quot;>Michael Chen</div>
                    <div className=&quot;text-sm text-slate-400&quot;>CTO, InnovateLab</div>
                  </div>
                </div>
                <p className=&quot;text-slate-300 italic&quot;>
                  &quot;Outstanding technical expertise and project management. They delivered on time and within budget.&quot;
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id=&quot;contact&quot; className=&quot;py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white&quot;>
        <div className=&quot;container mx-auto px-4 lg:px-6&quot;>
          <div className=&quot;grid lg:grid-cols-2 gap-12&quot;>
            <div className=&quot;space-y-8&quot;>
              <div>
                <Badge className=&quot;bg-blue-800/50 text-blue-300 mb-4 border border-blue-700&quot;>Get In Touch</Badge>
                <h2 className=&quot;text-3xl lg:text-5xl font-bold mb-6&quot;>Ready to Start Your Project?</h2>
                <p className=&quot;text-xl text-slate-300&quot;>
                  Let&apos;s discuss how we can help bring your ideas to life. Get in touch for a free consultation.
                </p>
              </div>

              <div className=&quot;space-y-6&quot;>
                <div className=&quot;flex items-center space-x-4&quot;>
                  <div className=&quot;w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center&quot;>
                    <Mail className=&quot;w-6 h-6&quot; />
                  </div>
                  <div>
                    <div className=&quot;font-semibold&quot;>Email Us</div>
                    <div className=&quot;text-slate-300&quot;>hello@devcraft.agency</div>
                  </div>
                </div>

                <div className=&quot;flex items-center space-x-4&quot;>
                  <div className=&quot;w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center&quot;>
                    <Phone className=&quot;w-6 h-6&quot; />
                  </div>
                  <div>
                    <div className=&quot;font-semibold&quot;>Call Us</div>
                    <div className=&quot;text-slate-300&quot;>+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className=&quot;flex items-center space-x-4&quot;>
                  <div className=&quot;w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center&quot;>
                    <MapPin className=&quot;w-6 h-6&quot; />
                  </div>
                  <div>
                    <div className=&quot;font-semibold&quot;>Visit Us</div>
                    <div className=&quot;text-slate-300&quot;>123 Innovation Street, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className=&quot;p-8 border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm&quot;>
              <CardHeader className=&quot;p-0 mb-6&quot;>
                <CardTitle className=&quot;text-2xl text-white&quot;>Send us a message</CardTitle>
                <CardDescription className=&quot;text-slate-300&quot;>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>

              <form className=&quot;space-y-6&quot;>
                <div className=&quot;grid md:grid-cols-2 gap-4&quot;>
                  <div>
                    <label className=&quot;block text-sm font-medium text-slate-300 mb-2&quot;>First Name</label>
                    <Input
                      placeholder=&quot;John&quot;
                      className=&quot;bg-slate-700 border-slate-600 text-white placeholder:text-slate-400&quot;
                    />
                  </div>
                  <div>
                    <label className=&quot;block text-sm font-medium text-slate-300 mb-2&quot;>Last Name</label>
                    <Input
                      placeholder=&quot;Doe&quot;
                      className=&quot;bg-slate-700 border-slate-600 text-white placeholder:text-slate-400&quot;
                    />
                  </div>
                </div>

                <div>
                  <label className=&quot;block text-sm font-medium text-slate-300 mb-2&quot;>Email</label>
                  <Input
                    type=&quot;email&quot;
                    placeholder=&quot;john@example.com&quot;
                    className=&quot;bg-slate-700 border-slate-600 text-white placeholder:text-slate-400&quot;
                  />
                </div>

                <div>
                  <label className=&quot;block text-sm font-medium text-slate-300 mb-2&quot;>Project Type</label>
                  <Select>
                    <SelectTrigger className=&quot;w-full bg-slate-700 border-slate-600 text-white&quot;>
                      <SelectValue placeholder=&quot;Select a project type&quot; />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=&quot;web&quot;>Web Development</SelectItem>
                      <SelectItem value=&quot;mobile&quot;>Mobile App</SelectItem>
                      <SelectItem value=&quot;backend&quot;>Backend Development</SelectItem>
                      <SelectItem value=&quot;fullstack&quot;>Full Stack Solution</SelectItem>
                      <SelectItem value=&quot;consulting&quot;>Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className=&quot;block text-sm font-medium text-slate-300 mb-2&quot;>Project Details</label>
                  <Textarea
                    placeholder=&quot;Tell us about your project requirements, timeline, and budget...&quot;
                    rows={4}
                    className=&quot;bg-slate-700 border-slate-600 text-white placeholder:text-slate-400&quot;
                  />
                </div>

                <Button className=&quot;w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600&quot;>
                  Send Message
                  <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=&quot;bg-slate-900 text-white py-12 border-t border-slate-800&quot;>
        <div className=&quot;container mx-auto px-4 lg:px-6&quot;>
          <div className=&quot;grid md:grid-cols-4 gap-8&quot;>
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <div className=&quot;w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center&quot;>
                  <Code className=&quot;w-5 h-5 text-white&quot; />
                </div>
                <span className=&quot;text-xl font-bold&quot;>ProjectStack</span>
              </div>
              <p className=&quot;text-slate-400&quot;>
                Transforming ideas into digital reality with cutting-edge development solutions.
              </p>
            </div>

            <div>
              <h4 className=&quot;font-semibold mb-4&quot;>Services</h4>
              <ul className=&quot;space-y-2 text-slate-400&quot;>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    Backend Development
                  </Link>
                </li>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    DevOps
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className=&quot;font-semibold mb-4&quot;>Company</h4>
              <ul className=&quot;space-y-2 text-slate-400&quot;>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className=&quot;font-semibold mb-4&quot;>Connect</h4>
              <ul className=&quot;space-y-2 text-slate-400&quot;>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href=&quot;#&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>
                    Dribbble
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className=&quot;border-t border-slate-800 mt-12 pt-8 text-center text-slate-400&quot;>
            <p>&copy; {new Date().getFullYear()} DevCraft Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
