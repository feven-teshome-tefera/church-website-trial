'use client'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/dist/client/link"
// ministries
import { supabase } from "@/lib/supabase-client";
import { useEffect, useState } from "react";

interface ministries {
  id: number;
  created_at: string;
  title: string;
  description: string;
  details: string;
}
export default function MinistriesPage() {
  const [newministries, setNewministries] = useState<ministries[]>([]);
  const fetchministries = async () => {
    const{data, error} = await supabase
    .from('ministries')
    .select('*');
    if (error) {
      console.error('Error fetching ministries:', error);
      return
    } 
      setNewministries(data);
    }
    useEffect(() => {
      fetchministries();
    }, []);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary-gradient text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Our Ministries</h1>
            <p className="text-xl mt-6 opacity-95">Discovering your place in God's work</p>
          </div>
        </section>

        {/* Ministries Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {newministries.map((ministry) => (
                // <div className="bg-black">
                <div key={ministry.title} className="border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">{ministry.title}</h3>
                  <p className="text-foreground/80 mb-6">{ministry.description}</p>
                  <p className="text-foreground/70 mb-4 text-sm">{ministry.details}</p>
                  <button className="cursor-pointer text-primary font-semibold hover:text-primary/80 transition">
                    <a href="/ministries_get_involved">Get Involved →</a>
                  </button>
                </div>
                // </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Find Your Purpose</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Everyone has spiritual gifts and a role to play in God's kingdom. We'd love to help you discover where you
              can serve and grow.
            </p>
            {/* <button className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Connect with Us
            </button> */}
              <Link
                  href="/contact"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center"
                >
                  Connect with us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
