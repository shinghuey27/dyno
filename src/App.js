import styles from "./App.css";

import { useState } from "react";
import Textbox from "./Components/Textbox/Textbox";
import Searchbar from "./Components/Searchbar/Searchbar";
import DatePicker from "./Components/DatePicker/DatePicker";
import Label from "./Components/Label/Label";

import Stepper from "./Components/ProgressBar/Stepper";
import Radio from "./Components/RadioButton/Radio";

import { CalendarContainer } from "react-datepicker";
import Checkbox from "./Components/Checkbox/Checkbox";
import RadioButton from "./Components/RadioButton/RadioButton";
import { optionsSample, sampleItem } from "./SampleData/List";
import Text from "./Components/Text/Text";
import Switch from "./Components/Switch/Switch";
import Button from "./Components/Button/Button";

const renderCalendar = ({ className, children }) => {
  return (
    <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
      <CalendarContainer className={className}>
        <div style={{ background: "#f0f0f0" }}>What is your favorite day?</div>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};

function App() {
  const [demo, setDemo] = useState(true);
  const [inputError, setInputError] = useState(false);

  return (
    <fieldset className="field" style={{ padding: "2rem" }}>

      <Button  />

      {/* 7 Molecules  */}

      {/* 1. Textbox */}

      {/* <Textbox
        label={{
          label: "ID Number 2",
          className: "labelClass"
        }}
        tooltip={{ label: "abc" }}
        text={{
          className: "textClass",
        }}

        description={{
          label: "description 2"
        }}
        error={{
          label: "*Please enter valid ID number",
          className: "errorClass"
        }}
      /> */}

      {/* ------------------------------------------------- */}

      {/* 2. Searchbar */}

      {/* <Searchbar

        label={{ label: 'search' }}
        description={{
          label: "this is search bar",
        }}
        text
        data
      data={optionsSample}
      text={{
        style: {
          border: "1px solid #ddd",
          borderRadius: "4px",
          height: 40,
          width: 278,
          margin: 0,
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Lato",
          boxSizing: "border-box",
        }
      }}
      listBox={{
        style: {
          backgroundColor: '#44444F',
          margin: 0, zIndex: 200, position: 'absolute',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          borderRadius: 8,
          boxShadow: "0.5px 1px 1px 1px rgba(0, 0, 0, 0.05)",
          padding: 10,
          width: 260,
          top: -40,
          overflow: 'scroll',
          height: 50,
          overflowX: 'hidden',


        },
        className: 'listBox'
      }}
      item={{
        style: {
          backgroundColor: '#44444F',
        },
        className: 'itemList'
      }}
      icon={{style:{marginTop:50}}}
      /> */}

      {/* ------------------------------------------------- */}

      {/* 3. Stepper */}

      <div style={{ marginTop: 60 }}></div>

      {/* <Stepper
        stepOne
        stepTwo
        // stepThree
        label
        stepper={{
          style: { display: 'flex', flex: 1 }
        }}
        stepOne={{
          style: { backgroundColor: 'white', flex: 1, fontSize: 14, height: 20 },
          text: 'Select your goal'
        }}
        stepTwo={{
          style: { backgroundColor: 'white', flex: 1, fontSize: 14, height: 20 },
          text: 'Define your goal'
        }}
        hr
        label={{ label: 'Step 2/3' }}
        hr={{
          style: {
            border: '1px solid black',
            flex: 1, height: 0.1,
            marginTop: 22

          }
        }}
      /> */}

      {/* ------------------------------------------------- */}

      {/* 4. Datepicker */}

      {/* <DatePicker
        // container={{ style: {backgroundColor:'yellow'} }}
        label={'Calendar'}
        datePicker={{
          showYearDropdown: true,
          // style: {},
          // calendarClassName: 'datepick2',
          // calendarContainer: ({ className, children }) => renderCalendar({ className, children })          
        }}
      /> */}

      {/* ------------------------------------------------- */}

      {/* 5. Radiobutton */}

      {/* <RadioButton
        label='new label' /> */}

      {/* ------------------------------------------------- */}
      s
      {/* 6. Switch */}

      <Switch
        label

      />

      {/* ------------------------------------------------- */}

      {/* 7. Checkbox */}


      {/* <Checkbox
        label
        checkMark={{ style: { backgroundColor: 'red' } }}
        container={{ style: { color: 'green', "&::after": {} } }}

      /> */}





    </fieldset>
  );
}

export default App;
