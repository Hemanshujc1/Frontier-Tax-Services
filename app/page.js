import Image from "next/image";
import Link from "next/link";
import Head from "next/head";



export default function Home() {
  return (
    <div className="background">
       <Head>
        <title>Best CPA & Accounting Services | Your Global Tax Buddy</title>
        <meta name="description" content="Expert CPA and accounting services tailored for businesses and individuals. We specialize in tax preparation, payroll, bookkeeping, and financial consulting. Ensure compliance and maximize savings with our trusted solutions. Get started today!" />
        <meta name="keywords" content="CPA services, accounting firm, tax preparation, payroll, business accounting" />
        <meta name="author" content="Your Global Tax Buddy" />
      </Head>
      <section className="section-1 relative h-screen flex flex-col items-center justify-center bg-slate-800">
        <div className="video-container absolute inset-0 overflow-hidden">
          <video
            className="min-w-full min-h-full w-auto h-auto absolute opacity-[0.3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/homepagevideo.mp4" type="video/mp4" />
            Unable to load the background
          </video>
        </div>
        <div className="herosectiontext relative z-10 max-w-3xl text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Empowering Your Financial Successs
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-950">
            Partner with trusted CPAs and accounting experts delivering tailored
            consulting solutions for firms, businesses, and individuals.
          </p>
          <Link href="Contactus">
            <button className="buttons px-4 py-1 m-3">Get Started</button>
          </Link>
        </div>
      </section>

      <section className="py-1 bg-slate-150 whychooseus">
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full h-[15vh]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path fill="black" d="M0,96L1440,32L1440,0L0,0Z"></path>
          </svg>

          <div className="container mx-auto px-6 py-2 lg:px-12 relative z-10">
            <h2 className="text-4xl font-bold text-left text-white mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cards">
                <h3 className="cardsheading">Experienced Team</h3>
                <p className="cardspara ">
                  Work with seasoned professionals who are dedicated to your
                  financial success.
                </p>
              </div>

              <div className="cards">
                <h3 className="cardsheading">Proactive Approach</h3>
                <p className="cardspara">
                  We deliver actionable strategies to optimize your resources
                  and drive growth.
                </p>
              </div>

              <div className="cards">
                <h3 className="cardsheading">Personalized Solutions</h3>
                <p className="cardspara">
                  Tailored services to meet your unique needs and maximize your
                  potential.
                </p>
              </div>

              <div className="cards">
                <h3 className="cardsheading">Cost Efficiency</h3>
                <p className="cardspara">
                  Efficient outcomes at reduced costs to boost your bottom line.
                </p>
              </div>

              <div className="cards">
                <h3 className="cardsheading">Trusted Expertise</h3>
                <p className="cardspara">
                  Recognized for delivering exceptional results and building
                  long-term relationships.
                </p>
              </div>

              <div className="cards">
                <h3 className="cardsheading">Global Reach</h3>
                <p className="cardspara">
                  Helping clients navigate international markets with ease and
                  expertise.
                </p>
              </div>
            </div>
          </div>

          <svg
            className="absolute bottom-0 left-0 w-full h-auto translate-y-4  "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
          >
            <path fill="black" d="M0,32L1440,96L1440,120L0,120Z"></path>
          </svg>
        </div>
      </section>
      <div className="w-screen bg-white p-1"></div>
      <section className="Features flex flex-wrap overflow-y-auto overflow-x-hidden flex-col items-center justify-center gap-4 py-9 my-2 mx-auto px-6 lg:px-12">
        <div className="sectionintro flex flex-col gap-2 mb-10">
          <h2 className="text-center sectionheading">Our Services</h2>
          <p className="text-center sectionpara text-[#1f2937]">
            We offer a comprehensive range of CPA and accounting consulting
            services designed to meet your unique needs. Whether you&apos;re a
            business, entrepreneur, or individual, we deliver customized
            solutions to help you thrive.
          </p>
        </div>
        <div className="box1 flex justify-center gap-4">
          <div className="service cards">
            <div className="image">
              <Image
                src="/generalaccounting.gif"
                alt="general accounting"
                width={60}
                height={50}
                unoptimized
              />
            </div>
            <div className="service-desc">
              <Link href="/Services">
                <h3 className="cardsheading">General Accounting</h3>
                <p className="cardspara">
                  Bank reconciliations, Journal entry postings, Accruals and
                  prepayments
                </p>
              </Link>
            </div>
          </div>
          <div className="service cards">
            <div className="image">
              <Image
                src="/accountpayable.gif"
                alt="accounts payable"
                width={60}
                height={50}
                unoptimized
              />
            </div>
            <div className="service-desc">
              <Link href="/Services">
                <h3 className="cardsheading">Accounts Payable</h3>
                <p className="cardspara">
                  Supplier set-up, Purchase order processing, Supplier statement
                  reconciliation
                </p>
              </Link>
            </div>
          </div>
          <div className="service cards">
            <div className="image">
              <Image
                src="/accountsreceivable.gif"
                alt="accounts receivable"
                width={60}
                height={50}
                unoptimized
              />
            </div>
            <div className="service-desc">
              <Link href="/Services">
                <h3 className="cardsheading">Accounts Receivable</h3>

                <p className="cardspara">
                  Customer Set-up, Revenue Reconciliation, Cash Allocation and
                  Reporting
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="box2 flex justify-center gap-4">
          <div className="service cards">
            <div className="image">
              <Image
                src="/tax.gif"
                alt="tax preparation"
                width={60}
                height={50}
                unoptimized
              />
            </div>
            <div className="service-desc">
              <Link href="/Services">
                <h3 className="cardsheading">Tax Preparation</h3>

                <p className="cardspara">
                  Dedicated year-round tax advisory support for business and
                  individual returns
                </p>
              </Link>
            </div>
          </div>
          <div className="service cards">
            <div className="image">
              <Image
                src="/payroll.gif"
                alt="payroll"
                width={60}
                height={50}
                unoptimized
              />
            </div>
            <div className="service-desc">
              <Link href="/Services">
                <h3 className="cardsheading">Payroll</h3>

                <p className="cardspara">
                  Customized payroll reports, Daily, weekly and Monthly
                  statutory deductions
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen bg-white p-1"></div>

      <section className="section3 h-auto py-3 my-4 mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <h2 className="text-center sectionheading">
            Five pillars that epitomize our Unparalleled Work Approach
          </h2>
          <p className="sectionpara text-center p-3">
            We deliver seamless accounting solutions with a commitment to
            excellence, ensuring accuracy, efficiency, and success for our
            clients.
          </p>
        </div>
        <div className="pillars flex flex-wrap overflow-auto justify-center gap-6 h-[60vh] py-6 px-auto">
          <div className="pillarcard cards">
            <h3 className="cardsheading">Client-Centricity</h3>
            <p className="cardspara">
              Placing your needs and goals at the forefront of every decision
              and action, ensuring that our services align perfectly with your
              requirements.
            </p>
          </div>
          <div className="pillarcard cards">
            <h3 className="cardsheading">Exceptional Quality Standards</h3>
            <p className="cardspara">
              Committing to the highest standards of quality in every aspect of
              our work, from service delivery to customer interactions, to
              guarantee unparalleled excellence.
            </p>
          </div>
          <div className="pillarcard cards">
            <h3 className="cardsheading">Collaborative Partnership</h3>
            <p className="cardspara">
              Fostering a culture of open communication and collaboration, where
              we work closely with your team to achieve shared objectives and
              drive mutual success.
            </p>
          </div>
          <div className="cards pillarcard">
            <h3 className="cardsheading">Innovation and Adaptability</h3>
            <p className="cardspara">
              Continuously exploring new ideas and methodologies while remaining
              flexible to adapt to evolving market dynamics, ensuring we stay
              ahead of the curve.
            </p>
          </div>
          <div className="cards pillarcard">
            <h3 className="cardsheading">Continuous Improvement</h3>
            <p className="cardspara">
              Embracing a mindset of continuous improvement and learning,
              constantly seeking feedback and refining our processes to deliver
              ever-improving outcomes for your company.
            </p>
          </div>
        </div>
      </section>
      <div className="w-screen bg-white p-1"></div>

      <section className="calltoaction bg-black text-white py-5 mx-auto px-6 lg:px-12 overflow-x-hidden">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <h2 className="sectionheading">Ready to Transform Your Finances?</h2>
          <h3 className="text-2xl">
            Let’s Build a Path to Your Financial Success Together
          </h3>
          <p className="w-[60%] text-white">
            Whether you need expert accounting services, tax consulting, or
            strategic business advisory, Your Global Tax Buddy is here to help.
            Take the first step towards financial clarity and growth today.
          </p>
          <Link href="Contactus">
            <button className="buttons py-1 px-2 m-1">Contact Us Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
