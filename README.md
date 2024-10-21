<<<<<<< HEAD
# Resume Terminal

## About

This projet use [ParcelJS](https://parceljs.org/) as build tool. It is made from scratch, the only library used is for an hidden command `paf` [canvas-confetti](https://github.com/catdad/canvas-confetti).

## Run the project

- To run in dev mode : `npm run dev`
- To build for production : `npm run build`

## Usage

### commands.json

File `commands.json` contain all commands that just needs to display simple data and doesn't need a JS actions.

For now, there are 4 possible type of steps :
- list
- text
- code
- table

#### responseType = list

To display a bullet list, the `value` field is an array of string.

```json
{
  "command": "whois adautry",
  "responseType": "list",
  "value": [
    "A 27 years old full stack developper",
    "3 years of experiences",
    "Living in Nantes"
  ]
}
```

#### responseType = table

Display a table, this object requires two fields :

- `headers`: Headers of the array
- `rows`: Array containing rows

```json
{
  "command": "whereis experiences",
  "responseType": "table",
  "headers": [
    "Date",
    "Client",
    "Description",
    "Tech"
  ],
  "rows": [
    [
      "2021",
      "La Poste",
      "Internal tool to schedule techniciens on interventions.",
      "Angular 11, Spring Boot/Batch, Genetic algorithm"
    ],
    [
      "2020",
      "DSI",
      "Maintenance of a timesheet internal tool. Development of plugins for our ProjeQtor instance.",
      "Symfony, Angular 8"
    ]
  ]
}
```

#### responseType = text

Just display text contained in `value`.

```json
{
    "command": "find . -type f -print | xargs grep \"hobby\"",
    "responseType": "text",
    "value": "Bonsoir"
}
```

#### responseType = code

Display code between `pre` tag, `value` is an array of string, each string is a line.

```json
{
    "command": "curl https://adautry.fr/user/03101994",
    "responseType": "code",
    "value": [
      "{",
      "   \"name\":\"Antoine DAUTRY\",",
      "   \"job\":\"Fullstack developper\",",
      "   \"experience\":\"3 years\",",
      "   \"city\":\"Nantes\"",
      "}"
    ]
}
```

## Customs commands

In the `app.js` file you can see multiple arrays that stores commands :

- `hiddenCommands`: Commands that are not use in autocompletion (easter egg commands for example)
- `customCommands`: Commands that needs a specials JS treatments, in my case `dark`/`light` to swith app theme, `get cv` to download my resume, ...
- `commandsList`: This is the main array used for autocompletion, it stores `customCommands` **and** commands that are listed in the `commands.json` file.
=======
# cv-terminal
>>>>>>> db1afd73243bf9cb895cfe5fee4f0909b5257928
