import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#010003">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Elementary School State 1 Pacitan, East Java, Indonesia
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Adhi Tama Institut of Technology Surabaya, East Java, Indonesia
          </h3>
          <p> Bachelor Degree </p>
          <h4 className="vertical-timeline-element-subtitle">Computer Science</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Web Developer - Asswell Laundry
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Sidoarjo, Indonesia
          </h4>
          <p> Developed Point of Sales </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          SEO Content Specialist - AsiaCommerce Network 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Surabaya, Indonesia
          </h4>
          <p> Perform ongoing keyword discovery, expansion and optimization to show on page one SERP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          FrontEnd Developer - Digital Center Surabaya
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Surabaya, Indonesia
          </h4>
          <p> Build comprehensive E-Commerce platform that connects both merchants
and customers in the gold trading industry.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
