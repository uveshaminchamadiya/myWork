import { objectData } from "./data";
import { ObjectData } from "./dataType";

export const Records = () => {
  const data: ObjectData = objectData;
  return (
    <>
      <h1>Object Data</h1>
      <table border={2} width={"100%"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((record) => (
            <tr key={data[record].id}>
              <td width={"50%"}>{data[record].name}</td>
              <td>{data[record].city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
