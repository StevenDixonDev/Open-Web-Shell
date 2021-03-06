CommandShell example:

Commands are provided to the engine through an array and passed in as props.

All functions require a `def` key and a `name`. 

```js static

const list = [
    {
        //name to call the function
        name: "function that sums two inputs",
        options: {
            //define what each flag does they will be passed into func below
            t: (e)=>e,
            d: (e)=>e
        },
        def: (e)=>{
            //default function when no flags or func is not defined
            //e is always the command itself. {name..., ....}
            return `${e.name} cannot be called without setting the proper flags` 
        },
        func: (e)=>{
            //if flags are used the arguments will contain objects with their key set to the flag
            //in this case t or d 
            //if flags are defined in options and a command is called with a parameter. the parameter will be passed to this function.
            return e.t||e.d|e;
        }
    }
]

// If you need to call functions from a component or object you can create the list like this, and pass in the context that is needed.

const provideListContext = (context) =>{
    const list = [
        name: 'contextTest',
        def: (e)=> context.function
    ]
    return list;
}

```

openWebShell can handle returned promises as well, if the function that is called needs to return later, the console will disable any input and wait.

Check the code below for an example.

openWebShell comes with a few pre-installed commands (these can be disabled through the config prop).

Any function that matches a pre-installed command will overwrite the pre-defined command. 

Names of functions are case sensitive.

Any functions without a default handler will through an error when called. Errors will be returned when trying to specify flags when the command has none.

Suggested commands will be returned when calling a command that does not exist.

A list of flags is returned when a command is called and an incorrect flag is used.

Currently commands cannot have dashes in their names.

```jsx inside Markdown

const config = {
   startUp: 'font -t sans-serif'
}

const styles = {
    fontFamily: 'courier',
}

const functions = {
    ChangeFonts: (e =>{styles.fontFamily = e; return `Font set to ${e}`})
}
 
const list = [
    {
        name: 'run', 
        def:()=>(["This command is not implemented"])
    },
];



<CommandShell functionList={list} styles={styles} config={config}/>
```