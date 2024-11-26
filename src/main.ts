import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import { testFunction } from './testFunctino.ts'
import { testObject } from './testObject.ts'
import { testClass } from './testClass.ts'
import { testGenerics } from './testGenerics.ts'
import { testNull } from './testNull.ts'
import { optionalChain } from './testOptionalChain.ts'

testFunction()
testObject()
testClass()
testGenerics()
testNull()
optionalChain()

// TSの勉強法
// 1. VScodeで飛ぶ          ：型宣言のファイルを見る。
// 2. chatGPTに変換してもらう：JS→TS変換、書き直して！
// 3. エラーをよく読む       ：TSのエラー文はわかりやすい。
// 4. 詰まったらとりまany    ：一旦anyにして、エラーを回避する。

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
