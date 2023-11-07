"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";
import ShowCode from "@/components/showCode";
import Link from "next/link";
import { BadModal, SampleModal } from "./Modal";

const Page = () => {
    const [isOpenSampleModal, setOpenSampleModal] = useState<boolean>(false);

    return (
        <div>
            <h1>モーダルダイアログ</h1>
            <h2>モーダルダイアログとは</h2>
            <p>モーダルダイアログまたは単にモーダルと呼ばれる機能は、ユーザへの説明や確認、フォームの表示などを行う際に使用される要素である。</p>
            <p>補足として、似たような要素にポップアップがあるが、モーダルは画面上の操作をコントロールすることが目的なのに対して、ポップアップは目立たせるのが目的であるという違いがある。</p>

            <SampleModal />

            <h3>モーダルの特徴</h3>
            <p>モーダルの特徴には以下のようなものがあります。</p>
            <ul>
                <li>ページの描画後にユーザの操作やアプリケーションのロジックによって表示される</li>
                <li>表示されている間はモーダル内の要素のみ操作ができる</li>
                <li>モーダル内での操作によって閉じられることがある</li>
            </ul>
            <p>「モーダル」なダイアログはそのダイアログという「モード」にユーザを閉じ込めてしまうのに対し、通常のWebページは「モーダレス」です。</p>

            <h3>モーダルによる効果</h3>
            <p>モーダルによって、限定的な操作だけを受け付ける状態にすることができます。できることが限定されてしまいますが、特定の順序に沿って情報を確認したり操作したりする必要があるときには有効です。</p>


            <h2>モーダルの問題点</h2>
            <h3>モーダルの書く場所</h3>
            しばしばbody要素の最後に要素を差し込む形で実装されます。body直下に配置することで、以下のようなメリットがあります。
            <ul>
                <li>親要素のスタイルの影響を受けない</li>
                <li>同じ<code>z-index</code>を持つ要素が存在しても最前面に表示される</li>
            </ul>

            <h3>悪いモーダルの例と問題点</h3>
            <p>モーダルの作成方法が悪いと、以下のような問題点があります。</p>
            <ul>
                <li>キーボード操作
                    <ul>
                        <li>モーダルが開いてからもフォーカスが元の場所に取り残され、ダイアログ内のインタラクティブ要素にすぐフォーカスできない</li>
                        <li>フォーカスがダイアログの外に出てしまう</li>
                        <li>ダイアログが閉じれず操作不能になる</li>
                    </ul>
                </li>
                <li>スクリーンリーダー
                    <ul>
                        <li>ダイアログであることを認識できない</li>
                        <li>カーソルがダイアログの外に出てしまう</li>
                    </ul>
                </li>
                <li>その他
                    <ul>
                        <li>ブラウザのズームで拡大するとダイアログ画見切れてしまい、操作不能になる</li>
                    </ul>
                </li>
            </ul>

            <p>以下にモーダルの悪い例を示します。</p>
            <div>
                <BadModal />
            </div>
            <br />
            <div style={{ display: 'flex' }}>
                <div>
                    <label htmlFor="last-name-input">姓</label>
                    <input id="last-name-input" type="text" />
                </div>
                <div>
                    <label htmlFor="first-name-input">名</label>
                    <input id="first-name-input" type="text" />
                </div>
            </div>

            <p>上に示したモーダルは、モーダルが開いてからもダイアログを無視して次の要素にフォーカスを写してしまいます。また、閉じるボタンが存在しないため、キーボード操作ではダイアログから抜け出せなくなってしまいます。</p>
            <p>スクリーンリーダーだと、ダイアログが開いたことに気付けず、何も起きていないのと同じように感じてしまいます。</p>

            <h2>モーダル作成時に気を付けること</h2>
            <h3>開閉時のフォーカス制御を実装する</h3>
            <p>モーダルをアクセシブルにするには、フォーカスの挙動まで含めてデザインする必要があります。デザイン時には以下の項目に気を付けましょう。</p>
            <ul>
                <li>モーダルが開いた時には、フォーカスをダイアログ内に移動させる</li>
                <li>閉じたときにbody要素にフォーカスがリセットされないようにする</li>
            </ul>
            <h3>フォーカストラップを実装する</h3>
            <p>フォーカストラップは、以前<Link href={"https://web-a11y-947h0orj9-shunkicreate.vercel.app/3-form/custom-component"}>カスタムコンポーネントについてのアクセシビリティ</Link>にも出てきました。この際は、フォーカスが入力フォームから抜け出せないなどの問題点をお伝えしました。しかし、モーダルではそのフォーカストラップを利用してモーダル外にフォーカスが出てしまうことを防ぎます。</p>
            <p>フォーカストラップを実装する上での注意点として、フォーカスが閉じ込められている状態から脱出できるべきであることが挙げられます。また、「閉じる」ボタンのような明示的にフォーカスがトラップを脱出するインタラクティブ要素を置くだけでなく、Escキーの押下によっていつでも脱出できるようにしておく方法もあります。ただし、「Escキーを押せば脱出できる」とすべての人が理解している保証はないため、Escキー頼りの設計にするのではなく、明示的なインタラクティブ要素と併用するのがよいでしょう。</p>


        </div>
    );
};

export default Page;


