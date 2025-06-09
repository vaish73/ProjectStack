import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Globe,
  Database,
  Users,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

export default function AgencyLanding() {
  return (
    <div className="min-w-full overflow-hidden relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-900/50 text-blue-300 hover:bg-blue-900/50 border border-blue-700">
                  🚀 Transforming Ideas into Reality
                </Badge>
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-white">
                  Build the{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Future
                  </span>{" "}
                  of Collaborations with students
                </h1>
                <p className="md:text-xl text-sm  text-slate-300 leading-relaxed">
                  ProjectStack is where student talent meets real-world innovation — post your projects,<br /> join teams based on your skills, or freelance your way into the future. Build. Collaborate. Get hired.

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
                  className="border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  View Our Work
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm text-slate-400">Projects Posted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-slate-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">9-5</div>
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
            <Badge className="bg-blue-900/50 text-blue-300 border border-blue-700">What You Can Build</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Collaborate on Real-World Tech Projects</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              ProjectStack connects students to innovative projects across modern tech stacks — post, join, or freelance based on your skills and passion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Web Development Projects",
                description:
                  "Work on full-stack apps using cutting-edge tech like Next.js, React, and TypeScript in a team environment.",
                features: ["Frontend & Backend", "API Integration", "Real-time Collaboration"],
              },
              {
                icon: Smartphone,
                title: "Mobile App Projects",
                description:
                  "Join cross-platform app builds with Flutter or React Native and bring creative mobile solutions to life.",
                features: ["iOS & Android", "Live Prototyping", "UI/UX Integration"],
              },
              {
                icon: Database,
                title: "Backend Engineering",
                description:
                  "Design scalable server-side logic, RESTful/GraphQL APIs, and databases that power real apps.",
                features: ["Node.js & Express", "MongoDB / PostgreSQL", "Auth & Security"],
              },
              {
                icon: Shield,
                title: "DevOps & Cloud Projects",
                description:
                  "Help teams deploy faster with CI/CD, containerization, and cloud infrastructure via real-world tasks.",
                features: ["Docker & GitHub Actions", "AWS / GCP", "Monitoring & Logs"],
              },
              {
                icon: Zap,
                title: "AI & ML Integrations",
                description:
                  "Contribute to projects that leverage AI for automation, recommendations, and user personalization.",
                features: ["LLMs & APIs", "Python & TensorFlow", "AI-Powered UX"],
              },
              {
                icon: Users,
                title: "Open Collaboration & Freelancing",
                description:
                  "Post your own projects or freelance on others — earn experience, build networks, and grow your portfolio.",
                features: ["Skill-Based Matching", "Peer Reviews", "Hire or Get Hired"],
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
              <Badge className="bg-blue-900/50 text-blue-300 border border-blue-700">Why ProjectStack</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-white">Build. Collaborate. Get Hired.</h2>
              <p className="text-lg text-slate-300">
                ProjectStack is the launchpad for student developers — a place to build real-world projects,<br />
                grow your portfolio, connect with like-minded peers, and land freelance gigs or team roles based on your skillset.
              </p>

              <div className="space-y-4">
                {[
                  "Skill-based project matchmaking for students and teams",
                  "Create or join projects across full-stack, mobile, DevOps, and AI domains",
                  "Collaborate, get reviews, and level up your portfolio",
                  "Earn freelance opportunities and build hiring potential from day one",
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-slate-300">{point}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                Explore Projects
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400">100+</div>
                  <div className="text-sm text-slate-400">Student Developers</div>
                </Card>
                <Card className="p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-slate-400">Live Projects</div>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400">1+</div>
                  <div className="text-sm text-slate-400">Colleges Represented</div>
                </Card>
                <Card className="p-6 text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-slate-400">Free & Student-Friendly</div>
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
              We believe in collaborative partnerships that drive innovation and create lasting value for your Projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Post or Explore Projects",
                description:
                  "Kickstart your journey by either creating a project idea or browsing existing ones that match your skills and interests.",
              },
              {
                step: "02",
                title: "Collaborate & Build",
                description:
                  "Join forces with like-minded students, contribute code, manage tasks, and grow your skills through hands-on development.",
              },
              {
                step: "03",
                title: "Showcase & Get Noticed",
                description:
                  "Add completed projects to your portfolio, receive peer reviews, and open doors to freelance gigs or internships.",
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

        </div>
      </section>
      {/*Contact Us - Section */}

    </div>
  )
}
