/* eslint-disable @next/next/no-img-element */
//

import BorderBody from "@/component/BorderBody";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

function NHS2() {
  return (
    <main>
      <BorderBody className="h-[400px]">
        <Header />
      </BorderBody>
      <BorderBody className="">
        <div className="flex justify-between fade_text">
          <p>Usability Evaluation of Our Dorset Digital</p>
          <div className="sm:w-[450px] sm:block hidden black_text font-medium exper">
            <p className="text-right">
              Our Dorset Digital is a program focused on creating and using
              digital
            </p>
            <p>
              tools to improve healthcare for Dorset residents, NHS staff, and
              frontline teams.
            </p>
          </div>
        </div>
        <div className="block sm:hidden black_text font-medium mt-5">
          <p>
            Our Dorset Digital is a program focused on creating and using
            digital tools to improve healthcare for Dorset residents, NHS staff,
            and frontline teams.
          </p>
        </div>
        <div className="w-full mt-24">
          <img src="/mock-2.png" alt="" />
        </div>
        <div className="sm:flex justify-between fade_text mt-16">
          <p>INTRODUCTION AND DETAILS</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <p className="">
              The website struggled to fulfil its purpose as a reliable,
              easy-to-use platform. Management claimed that users faced
              navigation issues, confusing content structure, and unclear design
              patterns.
            </p>
            <div className="mt-5">
              <p>Role</p>
              <p>Lead User Researcher</p>
            </div>
            <div className="mt-5">
              <p>Methodologies</p>
              <p>
                Qualitative and Quantitative research methods, Think-aloud,
                Heuristic Evaluation, Information architecture.
              </p>
            </div>
            <div className="mt-5">
              <p>Team</p>
              <p>Jude Ejike, Seyi Owolawi, Bukunmi Weke</p>
            </div>
            <div className="mt-5">
              <p>Timeline</p>
              <p>Q4 2022 - Q1 2023</p>
            </div>
            <div className="mt-10 flex items-center gap-3 ">
              <p className="text-[#8A8A8A] text-xs">
                READ FULL CASE STUDY ON NOTION
              </p>
              <HiMiniArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </BorderBody>
      <BorderBody className="">
        <div className="sm:w-[481px] m-auto">
          <p className="text-[#8A8A8A] uppercase">
            what where our research goals
          </p>
          <p className="black_text mt-3">
            As the Lead UX Researcher, my main objectives were:
          </p>

          <ul className="list-decimal ml-5 font-inter">
            <li className="mt-3">
              Uncover usability issues to inform actionable design improvements.
            </li>
            <li className="mt-3">
              Understand user behaviour, motivations, and pain points through
              qualitative and quantitative research.
            </li>
            <li className="mt-3">
              Optimise the user journey to make the website more intuitive,
              engaging, and effective.
            </li>
          </ul>
        </div>

        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-10">
          <img src="/blurred image.png" alt="" />
        </div>
      </BorderBody>
      <BorderBody>
        <div className="sm:flex justify-between fade_text">
          <p>DESIGN METHODOLOGY & PROCESS</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <div className="">
              <p>In-Depth Interviews and Focus Groups </p>
              <p>
                I initially conducted a host of in-depth interviews with current
                users of the app. Purposive sampling was used to recruit
                participants for in-depth Interviews.
              </p>
            </div>
            <div className="mt-5">
              <p>Ethnographic Research</p>
              <p>
                I observed users navigating the app in their everyday settings
                —at home, how they booked GP visits, or order prescriptions.
              </p>
            </div>
            <div className="mt-5">
              <p>Wireframes</p>
              <p>
                I created wireframes which were direct result of the data
                collection and were essential for the usability testing session.
              </p>
            </div>
            <div className="mt-5">
              <p>Usability Testing </p>
              <p>
                For test solutions, I conducted usability tests using the think
                aloud method to observe how usable the app was and see if
                solution met their expectations
              </p>
            </div>
            <div className="mt-5">
              <p>System Usability Questionnaire (SUS)</p>
              <p>
                I used the SUS questionnaire to measure the perceived usability
                of the solution we designed
              </p>
            </div>
          </div>
        </div>
        <div className="m-auto lg:w-[77%] sm:w-[85%] w-full mt-10">
          <img src="/new.png" alt="" />
        </div>
      </BorderBody>
      <BorderBody>
        <div className="sm:flex justify-between fade_text">
          <p className="uppercase">Recommendations based on Insights</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <div className="">
              <p>Navigation and Structure</p>
              <p>
                Simplify and clarify the site’s navigation to help users easily
                find what they need. Implement breadcrumbs and a robust search
                function to help users locate information more easily.
              </p>
            </div>
            <div className="mt-5">
              <p>Simplify Content</p>
              <p>
                Reduce jargon and summarise complex content to improve
                comprehension and ensure users can quickly absorb key
                information.
              </p>
            </div>
            <div className="mt-5">
              <p>Enhance Visibility of Resources</p>
              <p>
                Make critical resources, like the healthcare library, more
                visually prominent to support users’ tendency to rely on it as a
                hub for information.
              </p>
            </div>
          </div>
        </div>
      </BorderBody>
      <BorderBody>
        <div className="sm:flex justify-between fade_text">
          <p className="uppercase">Potential Impact From Findings</p>
          <div className="sm:w-[510px] black_text exper sm:mt-0 mt-6">
            <div className="">
              <p>
                If the navigation challenges and content clarity issues
                identified in the usability testing are addressed, similar
                usability evaluations have shown that completion rates could
                increase by up to 50%, with corresponding decreases in task
                errors and completion times.
              </p>
            </div>
            <div className="mt-5">
              <p>
                Simplifying language and restructuring information could lead to
                higher system usability scale (SUS) scores and significantly
                reduce user frustration.
              </p>
            </div>
            <div className="mt-5">
              <p>
                Clearer categorisation and reducing the priming effect by better
                distinguishing key information could prevent users from
                overlooking critical resources, improving engagement with
                essential content.
              </p>
            </div>
          </div>
        </div>
      </BorderBody>
      <Footer />
    </main>
  );
}

export default NHS2;
