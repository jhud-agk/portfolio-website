//

import BorderBody from "@/component/BorderBody";
import Header from "@/component/Header";
import React from "react";

function Bumble() {
  return (
    <main>
      <BorderBody className="h-[400px]">
        <Header />
      </BorderBody>
      <BorderBody className="">
        <div className="flex justify-between fade_text">
          <p>Reimagining Bumble’s Profile Sharing Experience</p>
          <div className="sm:w-[480px] sm:block hidden black_text font-medium exper">
            <p className="text-right">
              Recommending a friend is a free feature that lets bumble users
              safely
            </p>
            <p>
              and easily share a Bumble profile with someone they know,
              encouraging participation.
            </p>
          </div>
        </div>
        <div className="block sm:hidden black_text font-medium mt-5">
          <p>
            Recommending a friend is a free feature that lets bumble users
            safely and easily share a Bumble profile with someone they know,
            encouraging participation.
          </p>
        </div>
        <div className="w-full sm:h-[800px] h-[400px] bg-blue-600 mt-16"></div>
        <div className="sm:flex justify-between fade_text mt-16">
          <p>INTRODUCTION AND DETAILS</p>
          <div className="sm:w-[510px] black_text font-medium exper sm:mt-0 mt-6">
            <p className="">
              From the data analysed, users of Bumble frequently resort to
              manually taking screenshots and sending them to their friends to
              recommend a profile. This poses challenges in terms of finding the
              profile on Bumble and creates a suboptimal user experience.
            </p>
            <div className="mt-5">
              <p>Role</p>
              <p>Product designer, Researcher</p>
            </div>
            <div className="mt-5">
              <p>Methodologies</p>
              <p>
                User Research, Usability Testing, Product Design, Interactive
                Prototype, Stakeholder Management, Design System, Wireframes,
                Design Optimization.
              </p>
            </div>
            <div className="mt-5">
              <p>Platform</p>
              <p>iOS and Android</p>
            </div>
            <div className="mt-5">
              <p>Timeline</p>
              <p>Q3 2022 - Q1 2023</p>
            </div>
          </div>
        </div>
      </BorderBody>

      <BorderBody>
        <div className="sm:w-[481px] m-auto mt-10">
          <p className="text-[#8A8A8A]">BUSINESS GOALS & OBJECTIVES</p>
          <p className="black_text mt-3">
            Introduce a feature that enables in-app profile sharing via
            screenshots. This would make it easier for users to recommend
            profiles to their friends while ensuring recipients can quickly find
            the shared user within the app
          </p>
          <p className="black_text mt-3">
            This feature encourages users to share profiles, fostering
            connections and increasing activity on Bumble. When users recommend
            profiles to friends, it can attract new users, boosting
            subscriptions and expanding the user base.
          </p>
          <p className="black_text mt-3">
            The experiment's main goal is to improve the profile-sharing
            experience, making it easier to recommend profiles and encouraging
            more sharing. This can lead to increased referrals, more new users,
            and higher Average Revenue Per User (ARPU) on both Android and iOS
            platforms.
          </p>

          <div className="h-[500px] bg-amber-300 m-auto sm:w-[481px] mt-10"></div>
        </div>
      </BorderBody>
    </main>
  );
}

export default Bumble;
