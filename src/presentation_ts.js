// Import React
import React from 'react'

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Code,
    CodePane,
    MarkdownSlides,
    Markdown,
    Appear,
    Image,
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
import 'normalize.css'
const theme = createTheme(
    {
        primary: '#111',
        secondary: 'white',
        tertiary: '#03A9FC',
        quartenary: '#CECECE',
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
)

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
                <Slide transition={['zoom']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        How to TypeScript
                    </Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Image src={require('./shrug.gif')} />
                    <Text margin="20px 0 0 0" textColor="secondary">
                        Why types, bro?
                    </Text>
                </Slide>

                {/* <Slide transition={['fade']} bgColor="primary">
                    <Text textAlign="left" size={4} textColor="secondary">
                        Year is 2018, we are authoring complex apps in dynamically typed language.
                    </Text>
                </Slide> */}

                <Slide transition={['fade']} bgColor="primary">
                    <Text size={4} textColor="secondary">
                        Open a file at random, pick a variable. Can you guess what properties or methods you can safely
                        access? How long does it take to figure that out?
                    </Text>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Text size={4} textColor="secondary">
                        Have you ever wanted to remove/rename a property and decided against it because it felt not
                        safe?
                    </Text>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Text size={4} textColor="secondary">
                        Ever seen "cant call method X on undefined" exceptions?
                    </Text>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={3} textColor="secondary">
                        Statically Typed Languages
                    </Heading>
                    <Appear>
                        <List>
                            <ListItem textColor="secondary">TypeScript</ListItem>
                            <ListItem textColor="secondary">Flow</ListItem>
                            <ListItem textColor="secondary">ReasonML</ListItem>
                            <ListItem textColor="secondary">...</ListItem>
                        </List>
                    </Appear>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        TypeScript
                    </Heading>
                    <List>
                        <ListItem textColor="secondary">
                            Developed by Microsoft in open source. First public in October 2012, 1.0 release in April,
                            2014.
                        </ListItem>
                        <ListItem textColor="secondary">Typed superset of JavaScript</ListItem>
                        <ListItem textColor="secondary">Supports JSX</ListItem>
                        <ListItem textColor="secondary">Types are removed at runtime</ListItem>
                        <ListItem textColor="secondary">Includes type definitions for all Web APIs</ListItem>
                        <ListItem textColor="secondary">Extensive type defs on npm for 3rd party deps</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Basic Types
                    </Heading>
                    <List>
                        <ListItem textColor="secondary">boolean</ListItem>
                        <ListItem textColor="secondary">number</ListItem>
                        <ListItem textColor="secondary">string</ListItem>
                        <ListItem textColor="secondary">null</ListItem>
                        <ListItem textColor="secondary">undefined</ListItem>
                        <ListItem textColor="secondary">symbol</ListItem>
                        <ListItem textColor="secondary">Function</ListItem>
                        <ListItem textColor="secondary">void</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Using Types (Variables)
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`// implicit and inferred by TS
var isBatting = false;
var inning = 6;
var teamName = "Red Sox";
var runsRecord = [1,6,3];`}
                    />
                    <Appear>
                        <CodePane
                            margin="20px 0 0"
                            textSize={24}
                            lang="typescript"
                            source={`// explicit
var isBatting: boolean = false;
var inning: number = 6;
var teamName: string = "Red Sox";
var runsRecord: number[] = [1,6,3];`}
                        />
                    </Appear>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Using Types (Functions)
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`function add (x, y) {
    return x + y
}
`}
                    />
                    <Appear>
                        <CodePane
                            margin="20px 0 0"
                            textSize={24}
                            lang="typescript"
                            source={`function add (x: number, y: number): number {
    return x + y
}`}
                        />
                    </Appear>
                    <Appear>
                        <CodePane
                            margin="20px 0 0"
                            textSize={24}
                            lang="typescript"
                            source={`const add = (x: number, y: number): number => {
    return x + y
}`}
                        />
                    </Appear>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Using Types (Functions)
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`// inferred void return type
function printName ({ name }: { name: string }) {
    console.log(name)
}`}
                    />
                    <Appear>
                        <CodePane
                            margin="20px 0 0"
                            textSize={24}
                            lang="typescript"
                            source={`//better
interface Person {
    name: string
}
function printName ({ name }: Person) {
    ...
}`}
                        />
                    </Appear>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Interface vs Types
                    </Heading>
                    <Text textColor="secondary">Group related attributes under a common name</Text>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`interface Person {
    name: string
}

type Person = {
    name: string
}`}
                    />
                    <List>
                        <ListItem textColor="secondary">Interface can be extended</ListItem>
                        <ListItem textColor="secondary">Interface can be augmented later on</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Interface
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`// declared in TS
interface Window {
    ...
}

// custom type
interface App {
    isMaster: boolean,
    ...
}

// augmenting window to add additional attribute
interface Window {
    app: App
}
`}
                    />{' '}
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Interface
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`interface Person {
    firstName: string
    lastName: string
}

interface Employee extends Person {
    title: string
    hireDate: Date
    manager: Employee
}`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Type
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`type Person = {
    firstName: string
    lastName: string
}

type Employee = Person & {
    title: string
    hireDate: Date
    manager: Employee
}`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Type
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`type DateRange = [Date, Date]
type Post = {
    id: string
    liveAt: string | null
}

type Shape =
    { kind: 'circle', radius: number } |
    { kind: 'sqaure', size: number } |
    { kind: 'rectangle', w: number, h: number }`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Optionals
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`// liveAt is either string or null
type Post = {
    id: string
    liveAt: string | null
}`}
                    />
                    <Appear>
                        <CodePane
                            textSize={24}
                            lang="typescript"
                            source={`// liveAt is either string or null or undefined
type Post = {
    id: string
    liveAt: string | null | undefined
}`}
                        />
                    </Appear>
                    <Appear>
                        <CodePane
                            textSize={24}
                            lang="typescript"
                            source={`// liveAt may not exist (fails 'in' check). If it does, it is either string or null or undefined
type Post = {
    id: string
    liveAt?: string | null | undefined
}
`}
                        />
                    </Appear>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Optionals
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`function getDefaultDateRange(x?: string) {
    //...
}
getDefaultDateRange()
getDefaultDateRange('2017-2018')`}
                    />
                    <Appear>
                        <CodePane
                            margin="20px 0 0"
                            textSize={24}
                            lang="typescript"
                            source={`function getDefaultDateRange(x: string | undefined) {
    //...
}
getDefaultDateRange(undefined)
getDefaultDateRange('2017-2018')`}
                        />
                    </Appear>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Casting
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`type Post = {
    id: string
    liveAt: string | null
}
const posts: Post[] = [/* ... */]

// okay
const dates = posts
    .filter(post => post.liveAt)
    .map(post => {
        const liveAt = post.liveAt as string
        return new Date(liveAt)
    })`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Casting
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`type Post {
    id: string
    liveAt: string | null
}
const posts: Post[] = [/* ... */]

// better
const dates = posts.reduce((acc, post) => {
    if (post.liveAt) {
        const date = new Date(post.liveAt)
        acc.push(date)
    }

    return acc
}, [] as Date[])`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Classes
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`class Person {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
}`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Classes
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`class Person {
    private firstName: string
    private lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getName() {
        return this.firstName + this.lastName
    }
}`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Generics
                    </Heading>
                    <Text textColor="secondary">Create types from other types</Text>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`type Maybe<T> = T | null
type MaybeDate = Maybe<Date>

const maybeNullDate: MaybeDate = null
const maybeDate: MaybeDate = new Date()

if (maybeDate) {
    console.log(maybeDate.getFullYear())
}
`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Generics
                    </Heading>
                    <Text textColor="secondary">Infer types</Text>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`function identity<T>(a: T): T {
    return a
}
identity(5)
identity("")`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Generics
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="typescript"
                        source={`import * as React from 'react'

interface Post {
    id: string
    name: string
}

class PostInfo extends React.Component<Post> {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">
                        Demo
                    </Heading>
                </Slide>
            </Deck>
        )
    }
}
