import React from 'react'

import Hit from './Hits'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

import * as S from './styled'

const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_AGOLIA_SEARCHE_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}
const searchClient = algoliasearch(
    algolia.appId,
    algolia.searchOnlyApiKey
)

const SearchPage = () =>(
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox autoFocus translations={{placeholder: "Pesquisar..."}} />
        <Stats translations={{stats(nbHits, timeSpenMs){
            return `${nbHits} resultados encontrados em ${timeSpenMs}ms `
        }}}/>
        <Hits hitComponent={ Hit } />
      </InstantSearch>
    </S.SearchWrapper> 
)
export default SearchPage