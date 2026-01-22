'use client'
import { Navigation } from "@/components/navigation"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"
import { supabase } from "@/lib/supabase-client";

interface Pastor {
  id: number;
  created_at: string;
  name: string;
  position: string;
  description: string;
}
export default function AboutPage() {
  const [newPastors, setNewPastors] = useState<Pastor[]>([]);
  const fetchPastors = async () => {
    const{data, error} = await supabase
    .from('pasters')
    .select('*');
    if (error) {
      console.error('Error fetching pastors:', error);
      return
    } 
      setNewPastors(data);
    }
    useEffect(() => {
      fetchPastors();
    }, []);
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary-gradient text-primary-foreground py-16 md:py-24">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">About Emmanuel Baptist Church</h1>
            <p className="text-xl mt-6 opacity-95">Discovering your place in God's work</p>
        
          </div>
        </section>
        {/* Church Introduction */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Our Church</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Emmanuel Baptist Church is a congregation rooted in faith, built on the foundation of Jesus Christ and His
              teachings. Since our founding, we have been dedicated to serving our community with compassion, integrity,
              and love.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              We are more than a building or an organization—we are a family of believers committed to growing
              spiritually and serving others. Our doors are open to all who seek fellowship, spiritual growth, and a
              deeper relationship with God.
            </p>
            <p className="text-lg text-foreground/80">
              Whether you've been with us for years or are visiting for the first time, you'll find a warm welcome and a
              community that cares about your journey of faith.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-foreground/80 mb-4">
                  To be a beacon of faith and hope in our community, transforming lives through the Gospel of Jesus
                  Christ and equipping believers to make a meaningful difference in the world.
                </p>
                <p className="text-foreground/80">
                  We envision a church where every person experiences God's love, discovers their purpose, and lives out
                  their faith with joy and purpose.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-foreground/80 mb-4">
                  To worship God authentically, disciple believers in the faith, and extend Christ's love to our
                  community and beyond through word and action.
                </p>
                <p className="text-foreground/80">
                  We are committed to biblical teaching, meaningful fellowship, and practical service that reflects the
                  character of Christ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Pastors */}
        <section className="py-16 md:py-24 bg-background" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
              {newPastors.map((pastor) => (
                <div key={pastor.id} className="border border-border rounded-lg p-8 text-center">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold mb-2">{pastor.name}</h3>
                  <p className="text-primary font-semibold mb-4">{pastor.position}</p>
                  <p className="text-foreground/70">{pastor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Beliefs */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">What We Believe</h2>
            <div className="space-y-8">
              {[
                {
                  title: "The Authority of Scripture",
                  description:
                    "We believe the Bible is God's authoritative Word and the foundation for all faith and practice.",
                },
                {
                  title: "Salvation Through Christ",
                  description:
                    "We believe Jesus Christ is the Son of God and the only way to salvation. Faith in Him brings eternal life and spiritual transformation.",
                },
                {
                  title: "The Power of Community",
                  description:
                    "We believe believers are called to live in fellowship, supporting and encouraging one another in their faith journey.",
                },
                {
                  title: "Active Service",
                  description:
                    "We believe Christians are called to serve others and extend God's kingdom through acts of compassion and justice.",
                },
              ].map((belief) => (
                <div key={belief.title}>
                  <h3 className="text-xl font-bold mb-3">{belief.title}</h3>
                  <p className="text-foreground/70">{belief.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
