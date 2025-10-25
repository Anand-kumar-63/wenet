import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Monitor,
  Zap,
  Send,
  Play,
  ArrowRight,
  Star,
  ArrowLeft,
  Linkedin,
  Twitter,
  Globe,
  Youtube,
  Facebook,
  Instagram,
  Home, // Used as a placeholder for the original complex logo icon
} from "lucide-react";

export default function home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-black bg-white">
        <div className="h-[72px] px-16 flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="w-[84px] h-9 flex items-center justify-center">
              {/* Placeholder for the original complex logo SVG */}
              <Home className="w-9 h-9" />
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-8">
              <a href="#" className="text-base font-normal leading-[150%]">
                Features
              </a>
              <a href="#" className="text-base font-normal leading-[150%]">
                Pricing
              </a>
              <a href="#" className="text-base font-normal leading-[150%]">
                Blog
              </a>
              <div className="flex items-center gap-1">
                <a href="#" className="text-base font-normal leading-[150%]">
                  Resources
                </a>
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="default" className="border-black">
              Start
            </Button>
            <Button variant="default" size="default" className="bg-black text-white">
              Learn
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-16 py-20 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center border border-black bg-white">
            <div className="flex-1 p-12 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h1 className="text-[56px] font-bold leading-[120%]">
                  Record and share videos instantly with AI power
                </h1>
                <p className="text-lg font-normal leading-[150%]">
                  Transform your communication with smart video tools. Capture, enhance, and distribute professional videos in seconds.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Button variant="default" size="lg" className="bg-black text-white">
                  Start free
                </Button>
                <Button variant="outline" size="lg" className="border-black">
                  Watch demo
                </Button>
              </div>
            </div>
            <div className="flex-1 h-[640px] bg-gray-200 flex items-center justify-center">
              <Play className="w-20 h-20 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-16 py-28 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
          <div className="max-w-[768px] w-full flex flex-col items-center gap-4">
            <div className="text-base font-bold leading-[150%]">Features</div>
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 className="text-5xl font-bold leading-[120%] text-center">
                Powerful tools for modern video communication
              </h2>
              <p className="text-lg font-normal leading-[150%] text-center">
                Our platform delivers cutting-edge video solutions designed to streamline your workflow and enhance engagement.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="flex flex-col items-center gap-6">
                <Monitor className="w-12 h-12" />
                <div className="flex flex-col items-center gap-6 w-full">
                  <h3 className="text-[32px] font-bold leading-[130%] text-center">Instant recording</h3>
                  <p className="text-base font-normal leading-[150%] text-center">
                    Capture high-quality videos with a single click, no complex setup required.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center gap-6">
                <Zap className="w-12 h-12" />
                <div className="flex flex-col items-center gap-6 w-full">
                  <h3 className="text-[32px] font-bold leading-[130%] text-center">AI assistance</h3>
                  <p className="text-base font-normal leading-[150%] text-center">
                    Smart editing tools automatically improve your video quality and presentation.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center gap-6">
                <Send className="w-12 h-12" />
                <div className="flex flex-col items-center gap-6 w-full">
                  <h3 className="text-[32px] font-bold leading-[130%] text-center">Easy sharing</h3>
                  <p className="text-base font-normal leading-[150%] text-center">
                    Send videos directly to prospects with custom tracking and analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <Button variant="outline" size="lg" className="border-black">
                Learn more
              </Button>
              <Button variant="ghost" className="text-base font-normal leading-[150%]">
                Start free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-16 py-28 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
          <div className="max-w-[768px] w-full flex flex-col items-center gap-4">
            <div className="text-base font-bold leading-[150%]">Benefits</div>
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 className="text-5xl font-bold leading-[120%] text-center">
                Transform your workflow
              </h2>
              <p className="text-lg font-normal leading-[150%] text-center">
                Discover how our AI video tool revolutionizes communication and productivity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Benefit 1 */}
            <div className="h-[630px] p-8 flex flex-col justify-end gap-6 bg-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-2">
                <div className="text-base font-bold leading-[150%] text-white">Efficiency</div>
                <h3 className="text-[32px] font-bold leading-[130%] text-white">
                  Save time with rapid video creation and intelligent editing features
                </h3>
              </div>
              <div className="relative z-10 flex flex-col gap-8">
                <p className="text-base font-normal leading-[150%] text-white">
                  Reduce production time and focus on delivering compelling content.
                </p>
                <Button variant="link" className="text-white p-0 h-auto justify-start">
                  Learn more
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="h-[630px] p-8 flex flex-col justify-end gap-6 bg-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-2">
                <div className="text-base font-bold leading-[150%] text-white">Engagement</div>
                <h3 className="text-[32px] font-bold leading-[130%] text-white">
                  Boost audience interaction with personalized video experiences
                </h3>
              </div>
              <div className="relative z-10 flex flex-col gap-8">
                <p className="text-base font-normal leading-[150%] text-white">
                  Create memorable connections through targeted and dynamic video communication.
                </p>
                <Button variant="link" className="text-white p-0 h-auto justify-start">
                  Explore strategies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="h-[630px] p-8 flex flex-col justify-end gap-6 bg-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-2">
                <div className="text-base font-bold leading-[150%] text-white">Productivity</div>
                <h3 className="text-[32px] font-bold leading-[130%] text-white">
                  Streamline your video communication process
                </h3>
              </div>
              <div className="relative z-10 flex flex-col gap-8">
                <p className="text-base font-normal leading-[150%] text-white">
                  Eliminate technical barriers and focus on delivering impactful messages.
                </p>
                <Button variant="link" className="text-white p-0 h-auto justify-start">
                  Get started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-16 py-28 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
          <div className="max-w-[768px] w-full flex flex-col items-center gap-4">
            <div className="text-base font-bold leading-[150%]">Process</div>
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 className="text-5xl font-bold leading-[120%] text-center">
                How our video tool works
              </h2>
              <p className="text-lg font-normal leading-[150%] text-center">
                Simple steps to create and share professional videos
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Process Card 1 */}
              <div className="border border-black bg-white flex flex-col">
                <div className="p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="text-base font-bold leading-[150%]">Record</div>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[32px] font-bold leading-[130%]">
                        Click and capture your professional video
                      </h3>
                      <p className="text-base font-normal leading-[150%]">
                        Use our intuitive interface to record instantly
                      </p>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto justify-start">
                    Start
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <div className="h-[280px] bg-gray-200 flex items-center justify-center">
                  <Play className="w-20 h-20 text-gray-400" />
                </div>
              </div>

              {/* Process Card 2 */}
              <div className="border border-black bg-white flex">
                <div className="p-8 flex flex-col justify-center gap-8 flex-1">
                  <div className="flex flex-col gap-2">
                    <div className="text-base font-bold leading-[150%]">Share</div>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[32px] font-bold leading-[130%]">
                        Distribute your video with one click
                      </h3>
                      <p className="text-base font-normal leading-[150%]">
                        Send videos directly to your prospects
                      </p>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto justify-start">
                    Connect
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <div className="flex-1 bg-gray-200 flex items-center justify-center">
                  <Send className="w-20 h-20 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-16 py-28 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center gap-2 pb-24">
              <h2 className="text-5xl font-bold leading-[120%]">
                What our customers say
              </h2>
              <p className="text-lg font-normal leading-[150%]">
                Real stories from professionals who transformed their communication
              </p>
            </div>

            <div className="flex flex-col gap-12">
              <div className="p-8 border border-black flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-lg font-normal leading-[150%]">
                    This tool changed how I connect with clients overnight.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col flex-1">
                    <div className="text-base font-bold leading-[150%]">Michael Rodriguez</div>
                    <div className="text-base font-normal leading-[150%]">Sales director, Tech Innovations</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-black' : 'bg-black/20'}`}></div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full border-black">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-black">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-16 py-28 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
          <div className="max-w-[768px] w-full flex flex-col items-center gap-4">
            <div className="text-base font-bold leading-[150%] text-center">Team</div>
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 className="text-5xl font-bold leading-[120%] text-center">
                Meet our innovators
              </h2>
              <p className="text-lg font-normal leading-[150%] text-center">
                Passionate professionals dedicated to transforming video communication
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Elena Rodriguez', role: 'Founder and CEO', desc: 'Tech visionary with 15 years of experience in AI and communication technologies' },
                { name: 'Marcus Chen', role: 'CTO', desc: 'Expert in machine learning and video processing technologies' },
                { name: 'Sophia Kim', role: 'Head of product', desc: 'User experience designer focused on intuitive and powerful software solutions' },
                { name: 'Daniel Thompson', role: 'Lead engineer', desc: 'Innovative software architect driving our platform\'s technical excellence' }
              ].map((member, i) => (
                <div key={i} className="flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="text-xl font-bold leading-[150%]">{member.name}</div>
                      <div className="text-lg font-normal leading-[150%]">{member.role}</div>
                    </div>
                    <p className="text-base font-normal leading-[150%]">{member.desc}</p>
                  </div>
                  <div className="flex gap-3.5">
                    <Linkedin className="w-6 h-6" />
                    <Twitter className="w-6 h-6" />
                    <Globe className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Olivia Martinez', role: 'Head of marketing', desc: 'Strategic communicator with deep understanding of digital transformation' },
                { name: 'Ryan Anderson', role: 'Customer success', desc: 'Dedicated to ensuring our users achieve maximum value from our platform' },
                { name: 'Isabella Wong', role: 'Data scientist', desc: 'AI expert continuously improving our video intelligence algorithms' },
                { name: 'Lucas Garcia', role: 'Senior developer', desc: 'Passionate about creating seamless and powerful software experiences' }
              ].map((member, i) => (
                <div key={i} className="flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="text-xl font-bold leading-[150%]">{member.name}</div>
                      <div className="text-lg font-normal leading-[150%]">{member.role}</div>
                    </div>
                    <p className="text-base font-normal leading-[150%]">{member.desc}</p>
                  </div>
                  <div className="flex gap-3.5">
                    <Linkedin className="w-6 h-6" />
                    <Twitter className="w-6 h-6" />
                    <Globe className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[768px] w-full flex flex-col items-center gap-6">
            <div className="w-[768px] flex flex-col items-center gap-4">
              <h3 className="text-[32px] font-bold leading-[130%] text-center">Join our team</h3>
              <p className="text-lg font-normal leading-[150%] text-center">
                We're always looking for talented individuals to innovate with us
              </p>
            </div>
            <Button variant="outline" size="lg" className="border-black">
              View positions
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="px-16 py-28 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* CTA 1 */}
            <div className="flex flex-col items-center gap-8">
              <Monitor className="w-12 h-12" />
              <div className="flex flex-col gap-6 text-center">
                <h2 className="text-5xl font-bold leading-[120%]">
                  Ready to transform communication
                </h2>
                <p className="text-lg font-normal leading-[150%]">
                  Experience the power of AI-driven video sharing in your workflow
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="default" size="lg" className="bg-black text-white">
                  Start free
                </Button>
                <Button variant="outline" size="lg" className="border-black">
                  Watch demo
                </Button>
              </div>
            </div>

            {/* CTA 2 */}
            <div className="flex flex-col items-center gap-8">
              <Zap className="w-12 h-12" />
              <div className="flex flex-col gap-6 text-center">
                <h2 className="text-5xl font-bold leading-[120%]">
                  Unlock your potential
                </h2>
                <p className="text-lg font-normal leading-[150%]">
                  Discover how our platform can revolutionize your professional communication
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="default" size="lg" className="bg-black text-white">
                  Get started
                </Button>
                <Button variant="outline" size="lg" className="border-black">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-16 py-20 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="flex gap-16">
            {/* Column 1 - Logo and Contact */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="w-[84px] h-9 flex items-center justify-start">
                {/* Placeholder for the original complex logo SVG */}
                <Home className="w-9 h-9" />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold leading-[150%]">Address</div>
                  <div className="text-sm font-normal leading-[150%]">
                    Level 1, 12 Innovation Way, Sydney NSW 2000
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold leading-[150%]">Contact</div>
                  <div className="flex flex-col">
                    <a href="tel:1800videoshare" className="text-sm font-normal leading-[150%] underline">
                      1800 video share
                    </a>
                    <a href="mailto:support@aivideoapp.com" className="text-sm font-normal leading-[150%] underline">
                      support@aivideoapp.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Facebook className="w-6 h-6" />
                <Instagram className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Linkedin className="w-6 h-6" />
                <Youtube className="w-6 h-6" />
              </div>
            </div>

            {/* Column 2 & 3 - Links */}
            <div className="max-w-[400px] flex-1 flex gap-6">
              <div className="flex-1 flex flex-col">
                {['Product', 'Features', 'Pricing', 'Solutions', 'Enterprise'].map((link, i) => (
                  <div key={i} className="py-2">
                    <a href="#" className="text-sm font-bold leading-[150%]">{link}</a>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col">
                {['Integrations', 'Resources', 'Blog', 'Help center', 'Community'].map((link, i) => (
                  <div key={i} className="py-2">
                    <a href="#" className="text-sm font-bold leading-[150%]">{link}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col gap-8">
            <div className="w-full h-px bg-black"></div>
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div className="text-sm font-normal leading-[150%]">
                © 2024 AI Video Sharing Tool. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-sm font-normal leading-[150%] underline">Privacy policy</a>
                <a href="#" className="text-sm font-normal leading-[150%] underline">Terms of service</a>
                <a href="#" className="text-sm font-normal leading-[150%] underline">Cookie settings</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}