import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {
    graphql,
    RelayEnvironmentProvider,
    usePreloadedQuery,
    useQueryLoader,
} from 'react-relay'
import {createMockEnvironment, MockPayloadGenerator} from 'relay-test-utils'
import {Suspense} from "react";

const query = graphql`
    query testQuery($parameter: String) {
        field(parameter: $parameter)
    }
`

function Child({queryRef}) {
    const {field} = usePreloadedQuery(query, queryRef)
    return <span>{field}</span>
}

function Parent() {
    const [queryRef, loadQuery] = useQueryLoader(query)

    return (
        <>
            <button type="button" onClick={() => loadQuery({})}>Load</button>
            {queryRef != null && <Suspense><Child queryRef={queryRef}/></Suspense>}
        </>
    )
}

test('test', async () => {
    const environment = createMockEnvironment()
    environment.mock.queueOperationResolver(operation =>
        MockPayloadGenerator.generate(operation, {
            Query: () => ({field: 'foo'})
        }),
    )
    environment.mock.queuePendingOperation(query, {})

    render(
        <RelayEnvironmentProvider environment={environment}>
            <Parent />
        </RelayEnvironmentProvider>
    )
    await userEvent.click(screen.getByText('Load'))
    expect(screen.queryByText('foo')).toBeTruthy()
})