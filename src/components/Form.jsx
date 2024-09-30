import "./Form.css";
import { useState } from "react";

import MailerLite from '@mailerlite/mailerlite-nodejs';



function Form() {
    const initialState = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      };

  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    const target = e.target;
    const n = target.name;
    const v = target.value;

    const newvalue = { ...value, [n]: v }
  setValue(newvalue)

  };

  const submitDataToServer = (event) => {
    event.preventDefault();
    const mailerlite = new MailerLite({
        api_key: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNzYwZDI3Y2VhNmMxYjU1MTM2ZjY0ZmJhMzc2Mjk4OTIyNGU1M2RkNGUxYjhmY2IzNjllZWQxYzE5ODEyMGIzYjQ4YTA4YWUxYjRhMTBkMjAiLCJpYXQiOjE3Mjc3MjA3NzQuODAyODU4LCJuYmYiOjE3Mjc3MjA3NzQuODAyODYsImV4cCI6NDg4MzM5NDM3NC43OTk5ODIsInN1YiI6IjExMzQ2NjkiLCJzY29wZXMiOltdfQ.Tq4suaPCA7l7gjquWgsBckV1joosrU8ixyEv8-1fMPCIidfITvlVNgKNsB-XWj4aRH27QaWatPI3nK0HjKdh8dTJTDfkE3zy8skjX7DylCDuE21nspvtNr_xjSAUn0NQJ8RQMb-b4lWWx3GKJk1j-3l9hnKNsbEeO5jJBkSSzuKtvrCkrDWordnGMo0-CDh_mltr1HaSTRTrggEf_kq7jhvy1GgOejCyZyeGZZ2IbSiZzAEv8QZ9u-bw5tE2-PJFEmTZxjpxVEJo4n6vxLef_ezD_rAgRVuywLayCrZKQ3fNcf5lWad6kqXzT7C2zkIV1ZtYQ-2ZxShlsK9EoQW-riGksuPvXhP2N2gu2CtRT0r5F1yuN1sFpY950GzzBknzbA2CCQdt-uoPGqSA8FB3cULXYmLAuBC92dpq2JFK-JLo9ST6p9pqaJ8NqTBu0RGJpxzozmsahrwhWO4d8lXbpeC5hWRpgH1p2ZQg3uBKTAd2emsV7TMMjX8J9lt41ZODOSg8UDo5hH8VsFO0-7Kx_IQba9kaQ417yXILyTxkoMmtLZ3vEJN8VUmiKXrwkClXSdnTnQKjOlURo1Pmh4oZUVF-9cjoxxTGtR-7zSnv6KxxHTVshJDYzjnyzl4X9rXhkyM3tFUeu655BpYbjG6EAUA_CJ0Ql3Bd-LsZ7d8D0GY"
      });

      const params = {
        name: "Dummy AB campaign",
        language_id: 4,
        type:	"ab",
        emails: [{
          subject: "Dummy subject",
          from_name: "Dummy Testerson",
          from: "dick.unknown69@gmail.com",
          content: "<!DOCTYPE html>\n<html>\n<head>\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"format-detection\" content=\"address=no\" />\n  <meta name=\"format-detection\" content=\"telephone=no\" />\n  <meta name=\"format-detection\" content=\"email=no\" />\n  <meta name=\"x-apple-disable-message-reformatting\" />\n  <title>Untitled</title>\n  <!-- Style goes here -->\n  <style type=\"text/css\">\n\n  </style>\n</head>\n<body style=\"margin: 0; padding: 0;\">\n<!-- Main table -->\n<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\n  <tr>\n    <td style=\"padding: 0 40px;\">\n      <!-- Child table -->\n      <table align=\"center\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width: 100%; min-width: 100%;\">\n        <tr>\n          <td>\n            <p> This is a test content </p>\n            <a href=\"{$unsubscribe}\">Unsubscribe</a>\n          </td>\n        </tr>\n      </table>\n\n    </td>\n  </tr>\n</table>\n<!-- Footer -->\n</body>\n</html>",
        }],
        groups: ['4243829086487936'],
        ab_settings: {
          test_type: "subject",
          select_winner_by: "o",
          after_time_amount: 2,
          after_time_unit: "d",
          test_split:	5,
          b_value: {
            subject: "Dummy subject AB test",
            from_name: "Dummy Testerson AB test",
            from: "dick.unknown69@gmail.com"
          }
        }
      }
      
      mailerlite.campaigns.create(params)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          if (error.response) console.log(error.response.data);
        });

  };

  return (
    <div className="form_container">
      <h3>{"Get in Touch".toUpperCase()}</h3>
      <form action="">
          <input
            onChange={handleChange}
            type="text"
            id="fname"
            name="fname"
            value={value.fname}
            placeholder="First name"
          />
          <input
            onChange={handleChange}
            type="text"
            id="lname"
            name="lname"
            value={value.lname}
            placeholder="Last name"

          />
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={value.email}
            placeholder="Email"

          />
          <input
            onChange={handleChange}
            type="number"
            id="phone"
            name="phone"
            value={value.phone}
            placeholder="Phone"

          />
          <input
            onChange={handleChange}
            type="text"
            id="message"
            name="message"
            value={value.message}
            placeholder="Message"

          />
          <input onClick={submitDataToServer} type="button" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
