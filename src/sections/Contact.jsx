import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Section from "@/components/Section.jsx";

const Contact = () => {
    return (
        <Section id="contact">
            <div className="flex justify-center items-center   p-1">
                <Card className="w-full max-w-xl ">
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                        <CardDescription>
                            We would love to hear from you. Send us a message!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <Input id="name" placeholder="Your Name" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="you@example.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="Type your message here..." rows={5} required />
                            </div>

                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </Section>

    )
}

export default Contact
