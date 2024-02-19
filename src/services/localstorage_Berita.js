import uuid from "react-uuid";

export const getListOfBerita = () => {
    if(!localStorage["@berita"]){
        localStorage["@berita"] = JSON.stringify([])
    }

    let berita = JSON.parse(localStorage["@berita"]);
    return berita;
}; 

export const getBeritaById = (id) => {
    const berita = getListOfBerita();
    const beritaa = berita.find(berita => berita.id === id);
    return beritaa;
};

export const addBeritaa = (beritaa) => {
    const berita = getListOfBerita();
    berita.push({ id: uuid(), ...beritaa });
    localStorage["@berita"] = JSON.stringify(berita);
};

export const editBeritaa = (id, newBeritaa) => {
    let berita = getListOfBerita();
    berita = berita.filter((beritaa) => beritaa.id !== id);
    berita.push(newBeritaa);
    localStorage["@berita"] = JSON.stringify(berita);
};

export const deleteBeritaa = (id) => {
    let berita = getListOfBerita();
    berita = berita.filter((beritaa) => beritaa.id !== id);
    localStorage["@berita"] = JSON.stringify(berita);
};