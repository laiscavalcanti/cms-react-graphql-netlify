import React from "react"

import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hits"
import * as S from "./styled"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const SearchPage = () =>(
  <S.SearchWrapper>
  <InstantSearch
    appId={algolia.appId}
    apiKey={algolia.searchOnlyApiKey}
    indexName={algolia.indexName}
  >
    <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
    <Stats
      translations={{
        stats(nbHits, timeSpentMs) {
          return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
        },
      }}
    />
    <Hits hitComponent={Hit} />
  </InstantSearch>
</S.SearchWrapper>
)
export default SearchPage
