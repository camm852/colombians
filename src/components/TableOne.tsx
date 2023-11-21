import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';

const TableOne = ({crimes}: { crimes: any[] }) => {
    crimes = crimes.slice(0,10)
    return (
        <div
            className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Detenidos más recientes
            </h4>

            <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Fecha
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            País detención
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Grupo de edad
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Tipo de delito
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Situación jurídica
                        </h5>
                    </div>
                </div>
                {crimes.map((crime, index) => (
                    <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{crime['fecha_publicaci_n']}</p>
                        </div>
                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{crime['pais_prisi_n']}</p>
                        </div>
                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{crime['grupo_edad']}</p>
                        </div>
                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{crime['delito']}</p>
                        </div>
                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{crime['situaci_n_jur_dica']}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableOne;
