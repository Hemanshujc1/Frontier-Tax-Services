import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="section-1 relative h-screen flex flex-col items-center justify-center">
        <div className="video-container absolute inset-0 overflow-hidden">
          <video
            className="min-w-full min-h-full w-auto h-auto absolute opacity-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/video1.mp4" type="video/mp4" />
            Unable to load the background
          </video>
        </div>
        <div className="text relative z-10 max-w-3xl text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Assisting CPA Firms With Offshore Accounting Solutions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-400">
            We provide comprehensive assistance, spanning from bookkeeping to
            advisory consultation, resulting in enhanced efficiency and reduced
            costs for your company.
          </p>
        </div>
      </section>
      <div className="bg-white opacity-15 h-1"></div>
      <section className="Features flex flex-wrap overflow-auto flex-col items-center justify-center gap-24 mb-10 mt-10 h-[80vh]">
        <div className="box1 flex justify-center gap-5">
          <div className="service service1">
            <Image src="/generalaccounting.gif" alt="general accounting" width={60} height={50} unoptimized />
            <div className="service-desc">
              <Link href="/Service">
                <h1>General Accounting</h1>
              </Link>
              <p>
                Bank reconciliations, Journal entry postings, Accruals and
                prepayments
              </p>
            </div>
          </div>
          <div className="service service2">
            <Image src="/accountpayable.gif" alt="accounts payable" width={60} height={50} unoptimized />
            <div className="service-desc">
              <Link href="/Service">
                <h1>Accounts Payable</h1>
              </Link>
              <p>
                Supplier set-up, Purchase order processing, Supplier statement
                reconciliation
              </p>
            </div>
          </div>
          <div className="service service3">
            <Image src="/accountsreceivable.gif" alt="accounts receivable" width={60} height={50} unoptimized />
            <div className="service-desc">
              <Link href="/Service">
                <h1>Accounts Receivable</h1>
              </Link>
              <p>Customer set-up, Revenue Reconciliation, Cash allocation</p>
            </div>
          </div>
        </div>
        <div className="box2 flex justify-center gap-5">
          <div className="service service4">
            <Image src="/report.gif" alt="financial reporting" width={60} height={50} unoptimized />
            <div className="service-desc">
              <Link href="/Service">
                <h1>Financial Reporting</h1>
              </Link>
              <p>
                Management accounts, Commentary Analysis, Decision and planning
                support
              </p>
            </div>
          </div>
          <div className="service service5">
            <Image src="/tax.gif" alt="tax preparation" width={60} height={50} unoptimized />
            <div className="service-desc">
              <Link href="/Service">
                <h1>Tax Preparation</h1>
              </Link>
              <p>
                Dedicated year-round tax advisory support for business and
                individual returns
              </p>
            </div>
          </div>
          <div className="service service6">
            <Image src="/payroll.gif" alt="payroll" width={60} height={50} unoptimized />
            <div className="service-desc">
              <Link href="/Service">
                <h1>Payroll</h1>
              </Link>
              <p>
                Customized payroll reports, Daily, weekly and Monthly statutory
                deductions
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white opacity-15 h-1"></div>
      <section className="section3 h-[80vh]">
        <div className="heading2">
          <h2 className="text-center m-11 font-bold text-xl">
            Five pillars that epitomize our Unparalleled Work Approach
          </h2>
        </div>
        <div className="pillars flex justify-center gap-6 h-[60vh]">
          <div className="card pillar1">
            <h3>Client-Centricity:</h3>
            <p>
              Placing your needs and goals at the forefront of every decision
              and action, ensuring that our services align perfectly with your
              requirements.
            </p>
          </div>
          <div className="card pillar2">
            <h3>Exceptional Quality Standards:</h3>
            <p>
              Committing to the highest standards of quality in every aspect of
              our work, from service delivery to customer interactions, to
              guarantee unparalleled excellence.
            </p>
          </div>
          <div className="card pillar3">
            <h3>Collaborative Partnership:</h3>
            <p>
              Fostering a culture of open communication and collaboration, where
              we work closely with your team to achieve shared objectives and
              drive mutual success.
            </p>
          </div>
          <div className="card pillar4">
            <h3>Innovation and Adaptability:</h3>
            <p>
              Continuously exploring new ideas and methodologies while remaining
              flexible to adapt to evolving market dynamics, ensuring we stay
              ahead of the curve.
            </p>
          </div>
          <div className="card pillar5">
            <h3>Continuous Improvement:</h3>
            <p>
              Embracing a mindset of continuous improvement and learning,
              constantly seeking feedback and refining our processes to deliver
              ever-improving outcomes for your company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
