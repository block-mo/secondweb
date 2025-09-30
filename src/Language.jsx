import { useState } from "react";

function LanguageComponent() {
    const [items, setItems] = useState(['React Js', 'Vue JS', 'Angular JS', 'Vanilla JS']);

    return (
        <div>
            <h1 className="m-5 p-4 bg-blue-300 font-bold rounded-md shadow-md">Front End Languages</h1>
            {items.length > 0 ? (
                <ul className="m-5 p-4 bg-slate-300 border-2">
                    {items.map((item, index) => (
                        <li style={{fontSize: '1.1rem', background: '#93c5fd', paddingLeft: '0.50rem'}} key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>No Front End Language is available</p>
            )}
        </div>
    );
}

export default LanguageComponent;