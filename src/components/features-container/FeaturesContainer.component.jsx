import FeatureContainer from "../feature-container/FeatureContainer.component";

import classes from "./FeaturesContainer.styles.module.scss";

const FEATURES_LIST = [
  {
    id: 1,
    iconUrl: "/assets/icon-online.svg",
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    iconUrl: "/assets/icon-budgeting.svg",
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. ",
  },
  {
    id: 3,
    iconUrl: "/assets/icon-onboarding.svg",
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    iconUrl: "/assets/icon-api.svg",
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

function FeaturesContainer() {
  return (
    <div className={classes.features_container}>
      <h2>Why choose Easybank?</h2>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub.
        <br /> Control your finances like never before.
      </p>
      <div className={classes.features_list}>
        {FEATURES_LIST.map((feature) => (
          <FeatureContainer key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default FeaturesContainer;
