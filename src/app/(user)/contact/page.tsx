import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const page = () => {
  return (
    <div>
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-800/50 text-blue-300 mb-4 border border-blue-700">Need Help?</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">Facing Issues on ProjectStack?</h2>
                <p className="text-xl text-slate-300">
                  Whether it's application glitches, communication delays, or any technical hiccups — we're here to help you sort it out.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Support Email</div>
                    <div className="text-slate-300">support@projectstack.in</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Helpline</div>
                    <div className="text-slate-300">+91 733 833 1975 (Call Any time)</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Head Office</div>
                    <div className="text-slate-300">ProjectStack HQ, AJIET, Mangalore</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-white">Report an Issue</CardTitle>
                <CardDescription className="text-slate-300">
                  Tell us what went wrong. Our support team will get back within 12 hours.
                </CardDescription>
              </CardHeader>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                    <Input
                      placeholder="Jane Doe"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="jane@student.university.in"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Issue Category</label>
                  <Select>
                    <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select an issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="application">Application Not Showing</SelectItem>
                      <SelectItem value="hiring">No Response After Getting Hired</SelectItem>
                      <SelectItem value="bug">Bug or Technical Issue</SelectItem>
                      <SelectItem value="profile">Profile / Project Not Updating</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Describe the Issue</label>
                  <Textarea
                    placeholder="Explain the issue with as much detail as possible..."
                    rows={4}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                  Submit Ticket
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
