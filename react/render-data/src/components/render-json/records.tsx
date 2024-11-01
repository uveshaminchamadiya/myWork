import { jsonData } from "./data";
import { JsonData } from "./dataTypes";

export const Records = () => {
  const data:JsonData[] = jsonData;
  return (
    <>
      <h1>Json Data</h1>
      <table border={2} width={"100%"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td width={"50%"}>{item.name}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
