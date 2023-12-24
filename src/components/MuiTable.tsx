import React from 'react';
import {TableContainer, 
        Table, 
        TableHead,
        TableBody,
        TableRow,
        TableCell,
        Paper,} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      <Table aiaa-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell> id</TableCell>
            <TableCell> First Name </TableCell>
            <TableCell> Last Name </TableCell>
            <TableCell align='center'> EMail </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow 
              key = {row.id}
              sx={{'&:last-child td, &:last-chile th':{border:0}}}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = 
[{
  "id": 1,
  "first_name": "Eveleen",
  "last_name": "MacGillivray",
  "email": "emacgillivray0@smugmug.com",
  "gender": "Female",
  "ip_address": "156.232.164.111"
}, {
  "id": 2,
  "first_name": "Carlina",
  "last_name": "Priestner",
  "email": "cpriestner1@dmoz.org",
  "gender": "Female",
  "ip_address": "72.136.4.140"
}, {
  "id": 3,
  "first_name": "Coretta",
  "last_name": "Yellowlea",
  "email": "cyellowlea2@zdnet.com",
  "gender": "Female",
  "ip_address": "63.252.241.122"
}, {
  "id": 4,
  "first_name": "Bea",
  "last_name": "Tiddy",
  "email": "btiddy3@amazon.co.jp",
  "gender": "Female",
  "ip_address": "114.96.44.34"
}, {
  "id": 5,
  "first_name": "Bryant",
  "last_name": "Brinsden",
  "email": "bbrinsden4@timesonline.co.uk",
  "gender": "Male",
  "ip_address": "244.232.100.84"
}, {
  "id": 6,
  "first_name": "Hermine",
  "last_name": "Moffatt",
  "email": "hmoffatt5@phpbb.com",
  "gender": "Female",
  "ip_address": "69.30.185.169"
}, {
  "id": 7,
  "first_name": "Aigneis",
  "last_name": "Reed",
  "email": "areed6@furl.net",
  "gender": "Female",
  "ip_address": "135.47.132.6"
}, {
  "id": 8,
  "first_name": "Hervey",
  "last_name": "Monro",
  "email": "hmonro7@ibm.com",
  "gender": "Male",
  "ip_address": "60.161.174.175"
}, {
  "id": 9,
  "first_name": "Josias",
  "last_name": "Marushak",
  "email": "jmarushak8@rambler.ru",
  "gender": "Male",
  "ip_address": "225.162.66.81"
}, {
  "id": 10,
  "first_name": "Jake",
  "last_name": "Lilford",
  "email": "jlilford9@i2i.jp",
  "gender": "Male",
  "ip_address": "170.107.157.29"
}]