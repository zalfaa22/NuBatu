import React from "react";
import '../css/koin.css'

export default function Koin() {
    return (
        <div className="luar">
            <div className="koin">
                <div className="program">
                    Program
                </div>
                <div className="kanan">
                    <button className="pencet">
                        Tambah Program
                        <img src='../../assets/add.png' alt='add' className="add" />
                    </button>
                    <img src="../../assets/profil.png" className="profil"></img>
                </div>
            </div>

            <div className="option">
                <div className="campaign">
                    <button className="satu">Campaign Program</button>
                    <h1>Disetujui</h1>
                    <h1>Pengajuan</h1>
                    <h1>Ditolak</h1>
                </div>
                <button className="search">
                    Pencarian
                    <img src="../../assets/search.svg" className="cari"></img>
                </button>
            </div>

            <div className="tabel">
                <div className="menu">
                    <h1 className="nama">Nama</h1>
                    <h2 className="status">Status</h2>
                    <h3 className="inisator">Inisator</h3>
                    <h4 className="dana">Dana yang diajukan</h4>
                </div>
                <div className="konten">

                    <div className="tampil">
                        <img src='../../assets/program3.svg' className="p3"></img>
                        <div className="text">
                            <h1 className="zakat">Zakat Untuk Pendidikan Santri Pelosok</h1>
                            <h2 className="crud">
                                <div className="but-edit">
                                    <img src='../../assets/edit.svg' className="edit"></img>
                                    <div>Edit</div>
                                </div>
                                <div className="but-hapus">
                                    <img src='../../assets/delete.svg' className="edit"></img>
                                    <div>Hapus</div>
                                </div>
                            </h2>
                        </div>
                    </div>

                    <div className="bung-but">
                        <button className="sukses">
                            <img src="../../assets/dot-h.png" className="dot"></img>
                            Disetujui
                        </button>
                    </div>

                    <div className="batu">PCNU Batu</div>

                    <div className="uang">Rp. 100.000.000</div>

                </div>

                <div className="konten">

                    <div className="tampil">
                        <img src='../../assets/program2.svg' className="p3"></img>
                        <div className="text">
                            <h1 className="zakat">Hadirkan Kebahagiaan Melalui Sedekah Pangan</h1>
                            <h2>
                                <div className="but-edit">
                                    <img src='../../assets/edit.svg' className="edit"></img>
                                    <div>Edit</div>
                                </div>
                                <div className="but-hapus">
                                    <img src='../../assets/delete.svg' className="edit"></img>
                                    <div>Hapus</div>
                                </div>
                            </h2>
                        </div>
                    </div>

                    <div className="bung-but">
                        <button className="pengajuan">
                            <img src="../../assets/dot-o.png" className="dot"></img>
                            Pengajuan
                        </button>
                    </div>

                    <div className="batu">Indah Wahyuni</div>

                    <div className="uang">Rp. 10.000.000</div>

                </div>

                <div className="konten">

                    <div className="tampil">
                        <img src='../../assets/program1.svg' className="p3"></img>
                        <div className="text">
                            <h1 className="zakat">Pahala ABADI</h1>
                            <h2>
                                <div className="but-edit">
                                    <img src='../../assets/edit.svg' className="edit"></img>
                                    <div>Edit</div>
                                </div>
                                <div className="but-hapus">
                                    <img src='../../assets/delete.svg' className="edit"></img>
                                    <div>Hapus</div>
                                </div>
                            </h2>
                        </div>
                    </div>

                    <div className="bung-but">
                        <button className="ditolak">
                            <img src="../../assets/dot-m.png" className="dot"></img>
                            Ditolak
                        </button>
                    </div>

                    <div className="batu">Andi Aziz</div>

                    <div className="uang">Rp. 50.000.000</div>

                </div>

                <div className="page">
                    <h1 className="one">
                        Page 1 of 1
                    </h1>
                    <h2 className="two">
                        <button className="prev">Previous</button>
                        <button className="next">Next</button>
                    </h2>
                </div>
            </div>
        </div>

    )
}