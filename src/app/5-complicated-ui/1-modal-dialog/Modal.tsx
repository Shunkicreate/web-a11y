import style from "./modal.module.css"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export const SampleModal = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button className={style.button} onClick={() => setOpen(true)}>
                サンプルモーダルを開く
            </button>
            {
                isOpen && (
                    <div className={style.sampleModal}>
                        <div className={style.screen}>
                            <div className={style.dialog}>
                                <h1>モーダルダイアログ</h1>
                                <p>この部分がモーダルダイアログです</p>
                                <button onClick={() => setOpen(false)} >ダイアログを閉じる</button>
                            </div>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export const BadModal = () => {
    const [isOpen, setOpen] = useState(false);
    const modalElm = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = document.createElement('div');
        document.body.appendChild(el);
        modalElm.current = el;
        return () => {
            document.body.removeChild(el);
        }
    }, [])

    return (
        <>
            <button className={style.button} onClick={() => setOpen(true)}>
                悪い例のダイアログを開く
            </button>
            {
                isOpen && modalElm.current && createPortal(
                    <div className={style.badModal}>
                        <div className={style.screen}>
                            <div className={style.dialog}>
                                <h1>モーダルダイアログ</h1>
                                <p>この部分がモーダルダイアログです</p>
                            </div>
                        </div>
                    </div>,
                    modalElm.current
                )
            }
        </>

    );
}