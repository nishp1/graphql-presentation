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
                    <Heading size={1} fit lineHeight={1} textColor="secondary">
                        Intro to GraphQL
                    </Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={2} lineHeight={1} textColor="secondary">
                        Topics:
                    </Heading>

                    <List>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                How we fetch data currenty with REST
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                GraphQL Basics
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Benefits of GraphQL
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Look at some code
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={3} fit lineHeight={1} textColor="secondary">
                        A Simple UI Component
                    </Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Image src={require('./img/task_list.png')} />
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={6} lineHeight={1} textColor="secondary">
                        Resources:
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Task
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                User (v5 and v3 😭)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                License
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Post
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Campaign
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Asset
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Metadata (for user defined title and description)
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={6} lineHeight={1} textColor="secondary">
                        Cons:
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Too many round trips.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Slow especially on Mobile & slow networks.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Every developer has to intimately know each API they work with to write performant
                                querys.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Logic isn't reusable across Web and Mobile.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Logic isn't reusable lot of the times even on same platform either due to different data
                                requirements or UX hence we endup duplicating logic in multiple places.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Often Mobile reverse engineers what Web does. So bug in one, bug in other.
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                No usage metrics at field level. No deprecations.
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={6} lineHeight={1} textColor="secondary">
                        Options:
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Custom endpoints (/task_list, doesn't scale)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Use includes (can't do nested includes)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                No convention, everyone does their own thing or nothing
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Doesn't carry over from project to project
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={2} lineHeight={1} textColor="secondary">
                        GraphQL
                    </Heading>
                    <List>
                        <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                            Describe what’s possible with a type system
                        </ListItem>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Ask for what you need, get exactly that
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={2} lineHeight={1} textColor="secondary">
                        Facebook
                    </Heading>

                    <List>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                2012 - 2015: Internal project (built for mobile app, anyone rememeber their intial iOS
                                release?)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                July 2015: Open sourced spec working draft (http://facebook.github.io/graphql/) and
                                reference implementation in JS (https://github.com/graphql/graphql-js)
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={3} lineHeight={1} textColor="secondary">
                        What is GraphQL?
                    </Heading>
                    <Text textSize="2rem" margin="20px 0 0 0" textColor="secondary">
                        GraphQL is a{' '}
                        <span style={{ textDecoration: 'underline', color: 'hotpink' }}>query language</span> for APIs
                        and a runtime for fulfilling those queries with your existing data.
                    </Text>
                    <Appear>
                        <Text textSize="2rem" margin="20px 0 0 0" textColor="secondary">
                            At its core, it is completely decoupled from the transport. You can send it on top of
                            anything.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text textSize="2rem" margin="20px 0 0 0" textColor="secondary">
                            Your data is a Graph, described by a Schema.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text textSize="2rem" margin="20px 0 0 0" textColor="secondary">
                            Using Query Language, you read data out of that graph.
                        </Text>
                    </Appear>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Heading size={3} lineHeight={1} textColor="secondary">
                        GraphiQL Demo
                    </Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Full Task List Query
                    </Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Benefits
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Free Documentation
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Static Validation
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                DX (Mocks, Auto Completion)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Code Generation (TypeScript, Flow, Swift, Java)
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Pit of Success
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Understanding of how API is used, helpful for deprecations and improving performance
                                <Image bgColor="white" src={require('./img/usage.png')} />
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        How?
                    </Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Image src={require('./img/schema.png')} />
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Image src={require('./img/queries.png')} />
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Image src={require('./img/fields.png')} />
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Image src={require('./img/fields2.png')} />
                </Slide>

                <Slide transition={['fade']} bgColor="primary">
                    <Image src={require('./img/tree.png')} />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary">
                        What is a Schema?
                    </Heading>
                    <Text textSize="2rem" margin="20px 0 0 0" textColor="secondary">
                        Schema is the root type that implements 3 other types of fields, Query, Mutation and
                        Subscription.
                    </Text>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary">
                        Query
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="graphql"
                        source={`type Schema {
    query: Query
}

type Query {
    pins: [Pin!]!
}

type Pin {
    id: String!
    title: String!
    image: String!
}`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary">
                        Mutation
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="graphql"
                        source={`type Schema {
    ...
    mutation: Mutation
}

type Mutation {
    addPin(title: String!, image: String!): Pin!
}
`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary">
                        Subscription
                    </Heading>
                    <CodePane
                        textSize={24}
                        lang="graphql"
                        source={`type Schema {
    ...
    subscription: Subscription
}

type Subscription {
    pinAdded: Pin!
}
`}
                    />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Code
                    </Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Considerations
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Query Complexiy
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textSize="2rem" textColor="secondary" margin="20px 0 0 0">
                                Caching
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        Questions?
                    </Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary">
                        References:
                    </Heading>
                    <List>
                        <ListItem textSize="1rem" textColor="secondary" margin="20px 0 0 0">
                            <a href="https://www.graphql.com/">GraphQL Website</a>
                        </ListItem>
                        <ListItem textSize="1rem" textColor="secondary" margin="20px 0 0 0">
                            <a href="https://www.youtube.com/watch?v=PEckzwggd78">
                                Live APIs with GraphQL Subscriptions - Bruce Williams and Ben Wilson
                            </a>
                        </ListItem>
                    </List>
                </Slide>
            </Deck>
        )
    }
}
