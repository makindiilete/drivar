import React, { useEffect } from "react";
import "../assets/css/Privacy.page.css";
import group16 from "../assets/images/Privacy/Group 16.svg";

const PrivacyPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy">
      <div className="privacy__heading">
        <div className="container d-flex align-items-center h-100 position-relative">
          <div>
            <h2>Privacy & Policy</h2>
            <p>Last updated: October 2nd, 2021</p>
          </div>
          <img
            src={group16}
            className="img-fluid position-absolute"
            style={{ bottom: "-20%", right: "0" }}
          />
        </div>
        {/* /.container */}
      </div>
      {/* /.privacy__heading */}
      <br />
      <br />
      <br />
      <div className="privacy__text-content">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <section>
              <h3>Introduction</h3>
              <br />
              <p>
                This privacy policy applies to all websites and mobile
                applications linking to or posting this privacy policy and that
                are operated by Driva Technologies & Logistics Company which the
                Ryva app/portal are under. Each such website and mobile
                application is referred to in this privacy policy as a “Site”.
                In this privacy policy, we describe Ryva’s practices for
                collecting, storing, using, and disclosing the personal (and
                other) information that we may obtain about you through any of
                the Sites. Please note that by using or accessing any of our
                Sites, you consent to the collection, storage, use and
                disclosure practices described in this privacy policy.
              </p>
              <br />
              <br />
              <h3>Information We Collect Through the Sites</h3>
              <br />
              <ul className="privacy__list">
                <li>
                  <span className="font-weight-bolder">
                    Financial Transactions.
                  </span>{" "}
                  When engage in any financial transaction on one of our Sites,
                  you will be asked to provide information necessary to
                  facilitate the transaction, such as your credit card or debit
                  card number, associated security code, telephone number, and
                  billing address.{" "}
                </li>
                <li>
                  <span className="font-weight-bolder">
                    Registration as a Ryva Member.
                  </span>{" "}
                  In connection with your registration as a Ryva Member, you may
                  be asked to provide certain personal information, such as your
                  name, email address, mailing address, date of birth or age,
                  and a picture of a document such as your driver’s license or
                  other form of ID.{" "}
                </li>
                <li>
                  <span className="font-weight-bolder">
                    Sign-Up for Emails.
                  </span>{" "}
                  If you sign up on one of our Sites to receive email
                  communications from us, you may be asked to provide us with
                  your name or e-mail address.{" "}
                </li>{" "}
                <li>
                  <span className="font-weight-bolder">Promotions.</span> We may
                  collect information about you when you participate in a
                  promotion that we sponsor, such as a contest (which we may
                  sponsor alone or co-sponsor with one or more third parties).
                  To participate in one of our promotions, you may be asked to
                  provide your name and your email address, mailing address
                  and/or other contact information. For some promotions, we may
                  request other information about you as well.
                </li>{" "}
                <li>
                  <span className="font-weight-bolder">
                    Interactive Forums.
                  </span>{" "}
                  You and other Members may be allowed to post comments and
                  other content on certain portions of our Sites, such as on a
                  discussion board, blog or other interactive forum. This
                  includes parts of our Sites where Members can post offers and
                  requests for peer-to-peer shipping services. This will often
                  include travel itineraries, or a listing of goods intended to
                  be shipped. Any such information posted by a Member will be
                  considered as posted publicly with consent. Members must be
                  mindful of the information they post and understand that once
                  content is posted, it is viewable by other Members. We may
                  collect any information that you or another user posts about
                  you on one of our Sites, including personal information about
                  you, and it may be available to all users who have access to
                  the Site. Please keep this in mind when considering what
                  information to post to our Sites.
                </li>
                <li>
                  <span className="font-weight-bolder">
                    Social Networking Activities.{" "}
                  </span>{" "}
                  Our Sites may include the ability for you and other users to
                  link to one or more social networking platforms (such as
                  Facebook or Twitter). We may receive information about you
                  when you choose to post or otherwise share information about
                  us on any of these social networking platforms. Note that any
                  information that you or others post to a social networking
                  platform will be accessible by any users of such platform,
                  subject to its terms of service and privacy policy.
                </li>
                <li>
                  <span className="font-weight-bolder">Social Sign-In.</span>{" "}
                  Our Sites may incorporate functionality enabling you to
                  sign-on using your login information from a social networking
                  platform, in lieu of creating a new login account specifically
                  for the Site. If we incorporate such functionality and you use
                  it to sign into any of our Sites, we may collect information
                  about you from the social networking platform, such as your
                  list of friends, “likes,” and interests, as well as your
                  contact information.
                </li>
                <li>
                  <span className="font-weight-bolder">Usage Data.</span> When
                  you use or access any of our Sites, we may collect certain
                  usage data generated by your activities on the Sites,
                  including your purchasing history, pages viewed, number of
                  bytes transferred, hyperlinks clicked, and other actions you
                  take on our Sites. Each of our Sites may also track the URL
                  that you visited before you come to the Site, the URL to which
                  you next go, and your Internet Protocol (IP) address or mobile
                  device identifier.
                </li>
                <li>
                  <span className="font-weight-bolder">Location Data.</span>{" "}
                  Some of our Sites may collect information about your location,
                  such as the approximate location of your IP address. Unless
                  you provide us with your permission, this location data is
                  collected anonymously in a form that does not personally
                  identify you.
                </li>
                <li>
                  <span className="font-weight-bolder">
                    Online Information-Gathering Tools.
                  </span>{" "}
                  As with most websites, we use cookies, web beacons, and other
                  online information-gathering tools in connection with our
                  Sites. These tools are intended to make using our Sites easier
                  by, among other things, saving your preferences for you. We
                  may also use cookies to deliver content tailored to your
                  interests. If your browser is set to reject cookies, or if
                  your browser notifies you that you are about to receive a
                  cookie and you reject it, then your use of our Site may not be
                  as efficient as it would be if the cookie were enabled.
                </li>
              </ul>
            </section>
            <section>
              <br />
              <br />
              <h3>How We Use Information Collected Through Our Sites</h3>
              <br />
              <p>
                We may use information about you collected through our Sites for
                a variety of commercial purposes. Without limitation, we may use
                such information to:{" "}
              </p>
              <br />
              <ul className="privacy__list">
                <li>administer and improve our Sites and businesses;</li>
                <li>
                  promote our products and services to you, as well as the
                  products and services of our affiliates;
                </li>
                <li>
                  promote (and enable the promotion of) third-party products and
                  services to you that we think you may find of interest;
                </li>
                <li>
                  deliver email communications, newsletters, and other
                  correspondence to which you subscribe;
                </li>
                <li>
                  communicate with you about our contests and other promotions;
                </li>
                <li>conduct other marketing activities;</li>
                <li>
                  communicate with you regarding your Membership in Ryva; and
                </li>
                <li>
                  respond to your inquiries and other correspondence, or request
                  that you provide feedback to us.
                </li>
              </ul>
              {/* /.privacy__list */}
            </section>
            <section>
              <br />
              <br />
              <h3>
                When Information We Collect Through Our Sites May Be Disclosed
                to Third Parties
              </h3>
              <br />
              <p>
                We disclose to third parties the personal (or other) information
                collected about you through any of our Sites either (i) when we
                have your permission to do so or (ii) in any of the following
                situations (without your permission):
              </p>
              <br />
              <ul className="privacy__list">
                <li>
                  We may share the information collected about you within the
                  Ryva family of companies, which means we may disclose the
                  information collected about you to our affiliates (subject to
                  the terms of this privacy policy).
                </li>
                <li>
                  We may disclose the information collected about you to our
                  third-party contractors and partners in connection with their
                  performing services or other activities in support of the
                  Sites and/or our businesses, or their completing or confirming
                  on our behalf a transaction or series of transactions that you
                  conduct with us.
                </li>
                <li>
                  As noted above, information about you collected by third-party
                  ads, content or technologies integrated with any of our Sites
                  may be disclosed to such third parties.
                </li>
                <li>
                  We may disclose the results of aggregated data about you and
                  other users of our Sites without restriction. In these
                  situations, we do not disclose to these entities any
                  information that could be used to personally identify you.
                </li>
                <li>
                  We may disclose to one or more third parties the information
                  collected about you as part of a merger, acquisition or other
                  sale or transfer of any of the assets or business of Ryva
                  and/or of any of our affiliates. Please note that the entity
                  receiving such information in connection with one of these
                  transactions may not comply with all of the terms of this
                  privacy policy.
                </li>
                <li>
                  We may disclose information about you to the government or to
                  other third parties to comply with the law, applicable
                  regulations, governmental and quasi-governmental requests,
                  court orders, subpoenas or other legal process, such as in
                  connection with suspected illegal activity associated with any
                  of the Sites or our business. We reserve the right to release
                  information collected through any of the Sites to law
                  enforcement or other government officials, as we, in our sole
                  discretion, deem necessary or appropriate.
                </li>
                <li>
                  We may also disclose information about you to third parties if
                  needed to enforce any of the terms of use for one of our Sites
                  or other agreements, or any investigation of potential
                  violations thereof; to detect, prevent, or otherwise address
                  fraud, security or technical issues; to protect against harm
                  to any of the Sites; or to protect our rights, property or
                  safety or the rights, property or safety of our users or
                  others (e.g., to a consumer reporting agency for fraud
                  protection).
                </li>
              </ul>
              {/* /.privacy__list */}
            </section>
            <section>
              <br />
              <br />
              <h3>
                Security Measures for Information Collected Through Our Sites
              </h3>
              <br />
              <p>
                To help protect the privacy of information collected through our
                Sites, we employ security measures that are intended to be
                consistent with industry best practices. In addition, we take
                commercially reasonable steps to store such information with the
                objective of protecting such data against unauthorized access.
                Notwithstanding the foregoing, please be aware that our Sites
                are operated on software, hardware and networks, any component
                of which may, from time to time, experience breaches of security
                or other problems beyond our control and that may compromise the
                security of information collected about you. <br /> Please also
                be aware that despite our best intentions and the guidelines
                outlined in this privacy policy, no data transmission over the
                Internet or via a Wi-Fi network, or any encryption method, can
                be guaranteed to be completely secure. You understand that it
                may be possible for third parties not under Ryva’s control to
                intercept or access your personal information transmitted
                through one of our Sites or via email. Accordingly, although we
                undertake commercially reasonable steps to protect the security
                and integrity of all information you provide through our Sites,
                due to the inherent nature of the Internet, we cannot guarantee
                that any such information will be absolutely safe from intrusion
                by others who do not have your authorization. Any such
                transmission of information about you to Ryva is at your own
                risk.
              </p>
            </section>
            <section>
              <br />
              <br />
              <h3>
                How to Correct or Update Information About You Collected Through
                Our Sites
              </h3>
              <br />
              <p>
                You may correct or update information collected about you
                through any of our Sites by contacting us at the email or
                mailing address noted at the end of this privacy policy below.{" "}
                <br /> <br />
                You may also unsubscribe to any email subscriptions by following
                the applicable “unsubscribe” link. We will use commercially
                reasonable efforts to update our files to reflect your request
                as promptly as possible. We may retain original and updated
                information for reasons such as technical constraints, dispute
                resolution, compliance with laws, fraud prevention,
                troubleshooting and enforcement of our terms of use and other
                agreements. In addition, please note that we cannot update any
                information about you collected through any of the Sites that
                has already been disclosed (as permitted under this privacy
                policy) to a third party.
              </p>
            </section>
            <section>
              <br />
              <br />
              <h3>How to Request Your Information and Data Be Deleted</h3>
              <br />
              <p>
                If you want to review, update or delete personal data associated
                with your account, please submit a request to us or contact us
                via email at{" "}
                <span className="tertiary-text">help@ryva.com.ng</span> <br />{" "}
                For deletion requests, we will take reasonable measures to
                delete your personal data from our records. We will keep certain
                records (e.g., personal data relating to payments or customer
                service matters) where we need (and have rights) to, such as for
                legal or accounting purposes. We will also keep data in order to
                exercise, defend, or establish our rights.
              </p>
            </section>
            <section>
              <br />
              <br />
              <h3>Children</h3>
              <br />
              <p>
                Our Sites are not designed to appeal to persons under 13 years
                old (“children”). We do not knowingly collect or maintain
                personal information from children through our Sites, except for
                persistent identifiers that may be collected through children’s
                sections of our Sites which (as permitted by applicable law) we
                will use solely to support the internal operations of the Sites.
                If we learn that any unauthorized personal information of a
                child has been collected, we will take appropriate steps to
                delete such information. If you are a parent or guardian and
                discover that your child has provided any such personal
                information to us, then you may contact us at the email or
                mailing address noted at the end of this privacy policy below
                and request that we delete that information from our systems.
              </p>
            </section>
            <section>
              <br />
              <br />
              <h3>Minimum Age to Become a Ryva Member</h3>
              <br />
              <p>
                You must be at least 18 years of age to become a Ryva Member.
              </p>
            </section>
            <section>
              <br />
              <br />
              <h3>Privacy Policies of any Linked Websites or Other Parties</h3>
              <br />
              <p>
                This privacy policy only addresses Ryva’s practices for the
                personal (and other) information that we may obtain about you
                through any of the Sites. Please be aware that when you use or
                access any of the Sites, you may be directed to other websites
                that are beyond our control, and Ryva is not responsible for the
                privacy practices of third parties or the content of linked
                websites. We would expect most, if not all, of these third
                parties will collect information about you when you use their
                offerings. However, Ryva is not responsible for the privacy
                practices of third parties, regardless whether they are linked
                or otherwise connected to our Sites. We encourage you to read
                the posted privacy policy and terms of use whenever interacting
                with any third-party website, app, or other offering.
              </p>
            </section>
            <section>
              <br />
              <br />
              <h3>Governing Law</h3>
              <br />
              <p>
                By choosing to visit any of our Sites, you agree that any
                dispute over privacy or the terms contained in this privacy
                policy will be governed by the law of the Federal Republic of
                Nigeria, without reference to the choice of law or conflicts of
                law principles thereof and will be subject to the dispute
                resolution clause contained in the terms of use applicable to
                the particular Site. You also agree to abide by any limitation
                on damages contained in the terms of use applicable to the Site
                or any other agreement that we have with you.
              </p>
            </section>
            <section>
              <br />
              <br />
              <h3>Changes to this Privacy Policy</h3>
              <br />
              <p>
                We reserve the right to make changes to this privacy policy at
                any time, with any such changes to be effective prospectively.
                The use of your information is subject to the privacy policy and
                terms of use in effect at the time of collection. Please visit
                this page periodically so that you will be apprised of any such
                changes. Your continued use of our Sites after any modification
                to this privacy policy will constitute your acceptance of such
                modification.
              </p>
            </section>
            <section>
              <br />
              <br />
              <h3>Contact Us</h3>
              <br />
              <p>
                If you have any questions or comments regarding this privacy
                policy or any of our Sites, you can contact us by emailing at{" "}
                <span className="tertiary-text">help@myryva.com</span>
              </p>
            </section>
          </div>
          {/* /.col-md-6 offset-md-3 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.privacy__text-content */}
    </div>
  );
};

export default PrivacyPage;
