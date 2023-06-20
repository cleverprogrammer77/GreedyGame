import React from "react";
import { useState } from "react";
const Settings = ({ showSettings }) => {
  return (
    <>
      {showSettings && (
        <div className="settingsContainer">
          <h5 class="secondary-heading">Dimensions and Metrics</h5>
          <div class="settingsContainer-DragZone">
            <div
              class="settingsContainer-fields selected"
              data-index="0"
              draggable="true"
            >
              date
            </div>
            <div
              class="settingsContainer-fields selected"
              data-index="1"
              draggable="true"
            >
              App
            </div>
            <div
              class="settingsContainer-fields selected"
              data-index="2"
              draggable="true"
            >
              Ad requests
            </div>
            <div
              class="settingsContainer-fields selected"
              data-index="3"
              draggable="true"
            >
              Ad responses
            </div>
            <div
              class="settingsContainer-fields selected"
              data-index="4"
              draggable="true"
            >
              impressions
            </div>
            <div
              class="settingsContainer-fields selected"
              data-index="5"
              draggable="true"
            >
              clicks
            </div>
            <div
              class="settingsContainer-fields selected"
              data-index="6"
              draggable="true"
            >
              revenue
            </div>
            <div
              class="settingsContainer-fields selected"
              data-index="7"
              draggable="true"
            >
              fill rate
            </div>
            <div
              class="settingsContainer-fields selected"
              data-index="8"
              draggable="true"
            >
              ctr
            </div>
          </div>
          <div class="settingsContainer-footer">
            <div class="cancelButton">Close</div>
            <div class="applyButton">Apply Changes</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
