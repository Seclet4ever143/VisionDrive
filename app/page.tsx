import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Eye, Zap, Gauge, Cpu, Phone, Mail, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Cpu className="h-6 w-6 text-primary" />
            <span>VisionDrive</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
                How It Works
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
              <Button>Request Demo</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  The Future of Driving Safety
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-Powered Transparent OLED Windshields
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Eliminate blind spots, reduce reaction delays, and enhance driving safety with our revolutionary
                  windshield technology.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                  <Image src="/images/welcome-page.png" alt="welcome page.png" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revolutionizing Driving Safety</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered transparent OLED windshields offer unparalleled safety features and driving experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Eliminates Blind Spots</h3>
                <p className="text-center text-muted-foreground">
                  Advanced sensors and cameras work together to provide a complete view of your surroundings,
                  eliminating dangerous blind spots.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Reduces Reaction Time</h3>
                <p className="text-center text-muted-foreground">
                  Real-time hazard detection and alerts help drivers respond faster to potential dangers on the road.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Enhanced Safety</h3>
                <p className="text-center text-muted-foreground">
                  AI-powered analysis continuously monitors road conditions and provides intelligent safety
                  recommendations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Improved Fuel Efficiency</h3>
                <p className="text-center text-muted-foreground">
                  Optimized driving patterns suggested by our AI help reduce fuel consumption and environmental impact.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Vehicle Integration</h3>
                <p className="text-center text-muted-foreground">
                  Seamlessly connects with your vehicle's systems for a unified and intelligent driving experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">All-Weather Visibility</h3>
                <p className="text-center text-muted-foreground">
                  Enhanced visibility in all weather conditions, from heavy rain to bright sunlight, ensuring safer
                  driving.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Product Showcase
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See VisionDrive in Action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience how our technology transforms the driving experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/digital-dashboard.jpeg"
                    alt="Driver's View with Digital Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Driver's Perspective</h3>
                <p className="text-muted-foreground">
                  The driver's view shows a fully digital dashboard with intuitive controls and displays, providing all
                  essential information without taking your eyes off the road.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/navigation-display.jpeg"
                    alt="Navigation Display Integration"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Integrated Navigation Display</h3>
                <p className="text-muted-foreground">
                  Navigation information is seamlessly integrated into your field of view, with real-time maps and
                  directions displayed where you need them most.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-6">
              <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/images/smart-windshield.jpeg"
                  alt="Smart OLED Windshield Technology"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 text-center">Revolutionary Windshield Technology</h3>
              <p className="text-muted-foreground text-center">
                Our transparent OLED windshield transforms your entire field of view into an intelligent display,
                providing critical information while maintaining perfect visibility of the road ahead.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cutting-Edge Technology</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our transparent OLED windshield combines advanced AI with state-of-the-art display technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/smart-windshield.jpeg"
                    alt="OLED Windshield with Smart Display"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">1. Camera-Based Side Mirrors</h3>
                      <p className="text-muted-foreground">
                        Replacing traditional side mirrors with cameras reduces drag and blind spots, while displaying
                        the feed directly on your windshield for improved visibility.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">2. Integrated Driver Display</h3>
                      <p className="text-muted-foreground">
                        Essential information like speedometer, navigation, and alerts are displayed directly on the
                        lower portion of the driver-side windshield, keeping your eyes on the road.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">3. AI-Powered Analysis</h3>
                      <p className="text-muted-foreground">
                        Advanced machine learning algorithms process data from multiple sensors to identify potential
                        hazards and optimize driving experience.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    What Our Customers Say
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Hear from tech-savvy drivers who have experienced the future of driving safety.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <p className="italic text-muted-foreground">
                      "As an urban commuter, the VisionDrive windshield has completely transformed my daily drive. The
                      side mirror camera display is intuitive and the blind spot elimination feature has saved me from
                      several potential accidents."
                    </p>
                    <p className="mt-2 font-semibold">- Alex Chen, Software Engineer</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="italic text-muted-foreground">
                      "The integrated speedometer display is brilliant - I never have to take my eyes off the road. And
                      the night driving assistance makes me feel so much safer in low visibility conditions."
                    </p>
                    <p className="mt-2 font-semibold">- Sarah Johnson, UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg">
                  <Image src="/images/testimonial.jpeg" alt="testimonial.jpg" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Experience the Future?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the revolution in driving safety and technology.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  Request a Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or want to learn more? Our team is here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+63 930 0618 270</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>aedrian.puspus@carsu.edu.ph</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Caraga State University, Ampayon Butuan City,Agusan Del Norte</span>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Our Team</h3>
                  <p className="text-muted-foreground">Aedrian Puspus</p>
                  <p className="text-muted-foreground">Bernie Cherry Rante</p>
                  <p className="text-muted-foreground">Billy Terante</p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Cpu className="h-6 w-6 text-primary" />
            <span>VisionDrive</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} VisionDrive Technologies. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
