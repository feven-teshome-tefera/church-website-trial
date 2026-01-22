import Link from "next/dist/client/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MinisterViewMore() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[60vh] flex items-center justify-center overflow-hidden text-white rounded-b-[3rem]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579975096649-e773152b04cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D')" }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center space-y-3">
          <h6 className="text-1xl md:text-3xl font-bold drop-shadow-2xl">
            Next Generation
          </h6>
          <h2 className="text-5xl md:text-7xl font-bold drop-shadow-2xl">
            Youth
          </h2>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Raising disciples for the next generation
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-lg mt-8 text-center max-w-3xl mx-auto space-y-4">
        <h6 className="text-2xl md:text-3xl font-bold drop-shadow-2xl">
          Welcome to Youth!
        </h6>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          Youth is the place for every 13–19 year old to hang out, make good friends, and discover what it means
          to follow Jesus. Come as you are and grow in your faith together with us.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg mt-12 text-center max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <div className="flex flex-col max-w-md mx-auto space-y-4">
          {/* FAQ Items */}
          {[
            {
              question: "When & Where We Meet?",
              answers: [
                "When: Every Friday night, 18:30–22:00",
                "Where: New Life Alvik (Missionsvägen 75, Bromma)",
                "Cost: Free! No sign-up is needed—just show up!"
              ]
            },
            {
              question: "What to Expect on a Friday",
              answers: [
                "Games and hanging out with new friends",
                "Worship and prayer",
                "Reading and talking about the Bible",
                "Grilled cheese! (Yes, we eat together!)"
              ]
            },
            {
              question: "Our Leaders",
              answers: [
                "Our team of adult leaders is here every week to welcome you and help you."
              ]
            },
            {
              question: "Get Connected!",
              answers: [
                "Want to know more? Reach out to our Youth Pastor, Jae, at jae@newlife.nu.",
                "See what we’re up to! Check out our Instagram: @newlifeyouth_official"
              ]
            }
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-gray-100 rounded-lg overflow-hidden transition-all duration-300"
            >
              <summary className="cursor-pointer flex items-center justify-between py-2 px-3 font-semibold text-primary rounded hover:bg-gray-200">
                {faq.question}
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="max-h-0 group-open:max-h-96 overflow-hidden transition-all duration-500 mt-2 px-3 pb-2">
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  {faq.answers.map((ans, i) => (
                    <li key={i}>{ans}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
