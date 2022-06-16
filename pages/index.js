import Layout from "../lib/Layout";
import Marquee from "react-easy-marquee";
import SliderBanner from "../components/home/Slider";

export default function Home() {
  return (
    <div>
      <Layout>
        <div>
          {/* top headline */}
          <div>
            {/* marqure */}
            <Marquee
              pauseOnHover={true}
              duration={20000}
              background="#fafafa"
              className="py-0 cursor-pointer customHeadlineHeight"
            >
              <h1>
                ❤️❤️❤️পর্ব সমাপনী পুরুষ্কার বিতরনী অনুষ্ঠান❤️❤️❤ ২য় পর্ব সমাপনী
                পরীক্ষায় সকল টেকনোলজির A+ প্রাপ্ত ও ১ম, ২য় ও ৩য় স্থান অর্জন করা
                শিক্ষার্থীদের টেক টিউশন কেয়ার পরিবার এর পক্ষ থেকে ক্রেস্ট
                প্রদান।
              </h1>
            </Marquee>
          </div>
          <SliderBanner />
        </div>
      </Layout>
    </div>
  );
}
