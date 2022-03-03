import { Button } from "../../Components";
import styles from "./PopupList.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "../../App.css";

function createData(title, description, style) {
  return { title, description, style };
}

const rows = [
  createData("Principal Amount", "RM129,000.00"),
  createData("Maturity Date", "23 May 2022"),
  createData("Term", "6 Months"),
  createData("Profit Rate (p.a.)", "3.80%"),
  createData("Profit Payment Mode", "Add to Principal"),
  createData("Instruction on Maturity", "Auto Renewal")
];

const PopupList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div>
          <h3 className={styles.title}>FD40MY0002</h3>
          <label className={styles.description}>Michelle Tan Sri</label>
        </div>
        <div>
          <List
            sx={{
              width: "100%",
              minWidth: "817px",
              bgcolor: "#F8F8F8",
              borderRadius: "10px",
              marginTop: "30px"
            }}
          >
            {rows.map((row, index) => (
              <ListItem
                key={index}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <div className={styles.listItem}>
                  <ListItemText
                    primary={row?.title}
                    style={row?.style?.title}
                    className={styles.listItemTitle}
                  />
                  <ListItemText
                    primary={row?.description}
                    style={row?.style?.description}
                    className={styles.desc}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className={styles.button}>
        <Button item={{ label: "Done" }} style={{ fontWeight: "bold" }} />
      </div>
    </div>
  );
};

export default PopupList;
