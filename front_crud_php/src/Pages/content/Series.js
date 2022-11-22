import React from "react";
import NavbarLogged from "../../components/HeaderLogged";

const Series = () => {
    return (
        <div>
            <NavbarLogged />
            <main className=" p-2  position-relative">
                <h2 className="text-center">Series</h2>
                <div className="container mx-auto">
                    <div className="d-block mx-auto artista clearfix">
                        <img className="col-md-5 float-md-start mt-2 me-md-3" src="https://images5.alphacoders.com/668/668183.jpg" alt="" />
                        <div className="d-block">
                            <h2 className="fs-3 text-start">South Park</h2>
                            <p className="descripcion fs-6">
                                South Park es una serie de televisión estadounidense de animación, creada por Trey Parker y Matt
                                Stone para el canal Comedy Central. Está dirigida al público adulto y se caracteriza por satirizar
                                con humor negro la sociedad, actualidad y cultura estadounidense a través de las historias y
                                situaciones surrealistas que les suceden a sus protagonistas,1​ cuatro chicos (Stan, Kyle, Cartman y
                                Kenny) residentes en un pueblo ficticio de Colorado que se llama South Park.1
                                La serie se estrenó el 13 de agosto de 1997 en Estados Unidos. Desde entonces se han emitido 25
                                temporadas y ha sido comercializada internacionalmente, incluidos los mercados de España e
                                Iberoamérica.2​3​ Además, se ha estrenado un largometraje titulado South Park: Bigger, Longer &amp;
                                Uncut (1999). Con el paso del tiempo ha ganado cinco premios Primetime Emmy y un premio Peabody
                                entre otros galardones.4
                                En 2015, la serie renovó por nuevos capítulos con Comedy Central hasta la temporada 23.a, de 2019.5
                                Tras esta temporada, (que se estrenó el 25 se septiembre de 2019), el 12 de septiembre de 2019, se
                                volvió a renovar la serie hasta la temporada 26, en 2022.6
                                El uso de lenguaje soez y violencia por parte de South Park, su estilo de humor irreverente y el
                                tratamiento de diferentes episodios de la actualidad mundial (como satirizar el episodio de las
                                caricaturas de Mahoma o las burlas hacia la Iglesia de la Cienciología) le ha costado numerosas
                                polémicas a lo largo de su emisión.7
                            </p>
                            <a className="d-inline-flex btn btn-outline-primary align-items-center me-3" href="https://www.primevideo.com/detail/0IV9QOYYPPMQJFVTMXSUJ35VK9/ref=atv_dp_share_cu_r"><img src={require("../../Media/Icons/icons8-amazon-prime-video-50.png")} alt="" height={30} /> Ver en Amazon Prime Video</a>
                            <a className="d-inline-flex btn btn-outline-danger align-items-center" href="https://www.youtube.com/watch?v=9d3LmruP1HU"><img src={require("../../Media/Icons/icons8-youtube-play-64.png")} alt="" height={30} /> Ver trailer</a>
                        </div>
                    </div>
                    <div className="d-block mx-auto artista clearfix">
                        <img className="col-md-5 float-md-start mt-2 me-md-3" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/
2wCEAAkGBxMSEhUTEhMWFhUXFxYXFxgXGBUYFxoWFxcZGhgYGBgYHSggGBolHRcdITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxA
QGy0lHyUvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/
xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAQIHAAj/
xABIEAACAQIEAwUFBAYIBAYDAAABAhEAAwQSITEFIkEGE1FhcTKBkaGxBxRCwSNSYnLR8DNzgpKisuHxFSSzwhY1Y4TD4kNTo//
EABsBAAIDAQEBAAAAAAAAAAAAAAMEAQIFAAYH/
8QAOREAAQMCBAIIBAUDBQEAAAAAAQACEQMhBBIxQVFhBSJxgZGhwfATMrHRFCNC4fFSYnIzgpKisgb/2gAMAwEAAhEDEQA/
AOLsKiNTkVGwphwVQVZw13pUjPVBTFEMMocedEpuzCFBsoWv1EXJq3ewhFV+7riCussJU0Vi2vWuwY7sVl4Obf3UC9aw9vGG/
lXO1wu7XrDMOY5bRUAbSB4VEhsSoXJ8NcIopb1on9muGtvxPDLdtpcQ9+SjgMrZcPdYSGBB1APqKe+E8DwVoYq6uS6uKsXr
+DQhW7mwtkXHJEcjC5cFsDcC361YvDTBUZZXMzboh2XWMVb88w/wGrfZ3hJxWIs2B/8AkcAkb5Bq59ygmnXtfwgW7
+ExSYdcOrXXssihVHLdYWnhdJe2ZP7tWqEDq8QfVQJ1We6ry26ZODWoksqd2vM7MisQOiqSNzsBQ7Hw9xnChAToqgAAbDb0185pBGVJ
bdYNinAoqYhcMLSG3CgyozNKyXzbz/
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
QJb5R4mjdzhYP4hPpy0tdgf6S7
+4P81M13iCJdKu0DII9SKRxGNxT65pULZWzEAl2lrg8fLVbODwODGHbWxAnM6JkgN1vYjh5iyANwom6LZ0JnXeIEz8q2xvZtkRn7wHK
CYynWPfTFZys+cdFj5RU7pmVlPWR8VH8aFi
+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
LjdtW5biczspyq7DNoSpKgxoR/
IodR2UotNpcNffvXjunCxasPqtu2f7CfwqxasKvsqqzvlAH0oRwg5bjLEAjOPQxPzNGwaswyJVH5gYJVW5w
+2TORQ285VmfGYoRxLg6nUqPgKYhWLluatAUZjMyueYzhjIZUx5dKpW8cbbDvEAM+1APvmKfMXg/
KguO4YrAgj3GogKASpcBxi3cAFwK3gSAR89qMHD23UAKhUbCBA9B0rneNwFywc1uSvUdR/EVe4L2miAT7j+RqYXSVS
+0XDAXbaqAsISANN2bw9KRcXbc6FifIkxTp264mr37ZnQ2l+Id5+tLjoDWfVP5hXrMAwOwzOz1KX2LrsSPQkVXOIZdQSD4gkGjd
+xQy/hfKqhwKO6kRohmJxbv7TMfUk/
WoSmlEGwlR91RA4bJZ1F26GOlV7lujF21VG6lFa9J1qHFUVYirtjFzoarPUREVcgOCUa91I20RS5Z0kVSrbDYwr6Vdi22sx5VS7dU31
Kwlpg8Cg2avBqxWK05XnoUwuVuL1VprINWFQhRCIWrtXsPQmzROy0Db+PuqwqFVIVk3hppVhrKqq3C3tglRAOoMEGDp/
MxVXuypIMHzGxBEgjyINFMJgCEJFwRGYoSQDtGgMEg/Sg1q8AGf39/zGqLRpFxIj9lvw
+5BGYabeYnqPOtzgw4kTmneREeYqjhVJYE660ysQWggDbbzA/n3UtUr5anaOMfKfOZMpqlSzUuwxpNnDyiLfaUGOAZzEFj0AE6Dcj0/
Knjs7w7uk7pmBDkpmc5VkwMgDe0dYgeVR8HsWnuhDIJ1JBAWApLbbajpVbtObYRggyKSATMDMTo5nb9pt4neBCNOlU6SBLrMbtuTrrt
bhfa2zFerT6PhoEvdvsB2byffFJuYi5hcUbDZitq5Cq2hKg8u22gB8JHvHR8N2pwFy2GKsbqKRl1EvBADDzGhnoDvWO0fZg4tbTuwTF
C3bzOpB/S5B3gMaNzTPnNLeB7LXe/t4fEMiNcz9y9sZiz21zxzDk0BPX51tuwbHDNMd3u8zwWJTxrmnJH8/aI3nkur8Es5cPbnUsoY
+rCfzq5NVeC5zhcObgAfubWcAQA2RcwjprNToZNKaJiZupVakq7xG6l82gsqCSAq2gOUANMuGPjyruV3qHth23axdbD2FGdYDO2oEqG
5R7+vUGhFvG37ti1ilLks1220N7T2mgEyBBI3H7OmmgpWpEMzI2GqDPlXR8Lj7aL3jkAKEUsegdgBJ/eM+40bW7XJO32O
+72LGEU5i8Xbj7FuUKkjooJMD9jx3V+B9ssRhjy3CV3yzK+4Gj0qPUEm6BVrfmGBZfQq4iprdwGkjsp2tTGqRGW4ozFfFdsy
+U6HwkeNGTiyupMCqOBBgqQQRITEVmqGMwfUVzHinEcdxO9dXCYkWMPYfKGElrlwAEwY9keO2uxql2R4vjsLiFGJvM6Pca26v0ZQNZ2
PKdx1oXxAi/DdEroOJw/jSlxzs9ml7JCv1B2b
+BrouOsDWl7FW6uqLhnafHXReVbgIZFiDvqT8an4ZxkbNVj7RwGxjDwS2P8ADP50mklTS72B5Wzha9TDsadWkBdCzq21QXrPlSzw/
ihXQ0w4bHBog0m5haV6ChiKdYWVW+wAobnpgvW1fyPyoXfwRFS1wUVqbtQhd69VG65NEb
+G8qqPYphhCyq7HlVK1Iqw1qoWWiykXUyLFQkV6alIrTJVpS5YdlHFYiiZu4Qn+jur6XkPwDWQfiffWl3C2z/
R3GPk6AfNGb5gVoZZ0jxCzpQ6K8KmuWSNx7
+h9DUcVxaQYK6VLZNFeHAMwzMQoIzERIB8B1NC7IohhMT3T5iJEEEaagiOoMHqDG4qC12UxqpaRIzaJs41hFyobCs9ru0XORzEgsJIG
x0NXeC8J5wtxZ5RoZB16mNfdVHsbxoW7jKf0qhWzjWMhZCWTwKkaeM+ddBxFoB+ROVtM6wwB31I/navO47Evo0zR8DMH
+Y8eC3sDRp1XiqdRtaOHb3X0SHx3hrWWzADJJACe0B5+JE+NFuyXD1uoXuzytAmYIiRt60d49w/
NYGWNTEHQyY21BqrhcM1oLZtroFBuFQSZOgJkkmDvHjWTUxrjhw2YPHkPvp4LVZh2FxcDr6W
+0cD2q4ly3aQvAGbKqsJGh0nX3UjdpuLSxtxmEkCI1lNz03Y6
+lGO1HEkLdwHgrymdEzDcA9Z18qUsFZZ75c5ii8sqJYaCWCn2lkx7tK9z0XhDhsKynNzc9pufDQcgvC9I4oYnEvqbCw7BYeOp5kp/
7L8SByWxnz6CHR11CycrZIMxPtUy4nClruFvx/
R3QwP9ZbZf8A5B8qRsGhtZXQv1y3Apyeaku5a3rvBSNiKcsJxklIZEHsHQltVKxBgaSoPvNO1W1J6oBHvnGnDhzWfTNPVxIKdRblR6V
Tuch2qi3HsPbAF3FW7bEA5WuWlInX2W1qC92mwkEnFowAJibZGmv4QPrWOdStgaBcY7U4ycTi7p//
AG3AOuzED5Cnn7KhafhlwXyoSziHuFm2WLaMWM9OY1yjieJLnbVmLsB4kyfnV1eL3BhRhEcC3cum5cUAhi0IiqxOhUBA0DqddqZcAbI
DTBlFO1/GRi8Q91ZyMAqZvayKNCfMklo6ZvKlu8/h+786sF5do2Age7c/GquKOk+a1Z2igap2+y+/
GNtCY9seso3L6bH1UeFdmdJr577P4o2rqXATKMraeR1HvEimu99o1+/Iw4S3roWId46QugB8uag1BMIlM6ppNmzYW8e/
dUXEMzC1BbOQp7tgBMiJjqDOxqHHWrV/DlrN5ye
+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
+3HVUb/FLt1yLQgk6ECWP7vkPE
+VaHBYy0oukN3empyldyACV1XVT4ezRDs06Bu6ayLi4gPbYywZApULBGgHrrzET0LNZwJsphEF22qq5H3cwGvm4FDoASGLwx/
ANbogdKXqYyu92bMRyBIA981dlCm0QGoZwnGnE2X54dZVZUZ9BPNoZI3kbifCl7HJdS4rqxa4pnY6kGRoNYon31vC4vFoAGVQCozlZd
LoQc5APsXH6A6bVUbtMpdCMKigMMxzu75eoGaAdPEfCmm478rXrIf4dufSyE8H4ecXixaAy53YnINFUAs2UGY2geFW
+JYP7hjGt5iUEEEHUoy6ajbwkdKek7TtZw9t8Jb7pHEG+ci3Ll3nVyy
+zKQsFiToNGBpJ7aYrv8Qtw3e9mza1yqgBg5lCrousmBpzaaRWSSXyDoU8Py4cNQZXWOxfE7ePwipdChrbcoUlYgkWiJ1gzAnwpiS93
a91rpKSQRJAG0
+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
+VRTZDkUvgSEOtRAX8RM
+4DT61P3ND8Bo40pgtWpFMgQgEyh3c1juaMDDVg4apVUI7ms9zRU4avfd65crSvoK812vV6uUrZDWRXq9ULlDfmCAY8x0qnjg1zL3rs
2RQq7LABMaAefyr1erlKxiMfdKKmeAogGBmjWQT55jVdMYyo1uQVbcEDQ6ajwOlZr1cAFxJ4qqXqNxNYr1SoW2FwwZ0UQMzKNdtSBrT
s+OBuKLdlbxUwT
+iBXpyBiWHTfwr1erSwPyntWfjjBHYqXHuLo9zQEIkZl0M84F3UaE6sJk7VXxt5sNbtd3e0Dn2eoIJV8rSvMBrAgkTNer1XrHNTcTwU
Um5XtA4q1/wCMmKQ4Dea6H3ofqD7qp9jOHvcNy+ABmJWSYVRmDM2o1MwB5g16vUjQaC/xTGKcRTtyVvtBiy9xlDaGCNYIgaR4gg/
7Uk37ZVmDbya9XqrU1U0R1ZXQOxvGLhtIDdUEErzpmBA6SrKQYjXWnrDcSuRrbV/6q4s+pW6Ej0BNer1CRpV5eJWh7Za353EZF/
vkZT7jUXFu7vWWCsrgjdWDD4ivV6uUrkFpmw94pMCfLb37V1V8uIwRB0zJlLE7E6AzG4MRWa9TdIy0Slaogqv2exAayneKwYGDAEBhp
Gp0166etGO0N1gwNu1cIghioaYA0gK6E66e11r1epbEtl4Pb6ItA9UoQq4i5EWDHjfcCPMKTdb/ABrUd/
CwQcRi1UrJC2lluu2c3Lg0/VIr1eqiIobvFMLZl1ttcZADnvOSQCQAZcsw9oaQN6pdp
+191VIdgIfS2kjPGykkkxO58BtXq9XESrtsZSn2auXGe4+WSxJ5jAzGT4k/i86g4ngS9zmOv5nes16hMM1Cru
+QLS1w4Cr1uz4CvV6jIazlrEV6vVC5YisxXq9XLl//2Q==" alt="" />
                        <div className="d-block">
                            <h2 className="fs-3 text-start">The grand tour</h2>
                            <p className="descripcion fs-6">
                                The Grand Tour (El Gran Tour) es una serie británica de televisión automovilística para Amazon Video
                                presentada por Jeremy Clarkson, Richard Hammond y James May y producida por Andy Wilman.
                            </p>
                            <p className="descripcion fs-6">
                                Los cuatro acordaron producir la serie después de sus salidas de la serie de la BBC Top Gear con un
                                acuerdo
                                inicial de 36 episodios en tres años. Los episodios están programados para ser lanzados semanalmente
                                a
                                aquellos con cuentas de Amazon Prime en el Reino Unido, Estados Unidos, Alemania, Austria y Japón,
                                comenzando el 18 de noviembre de 2016. En los días posteriores al lanzamiento se convirtió en el
                                episodio de
                                estreno más visto de Amazon Video. A partir de diciembre de 2016, la muestra se puso a disposición
                                de otros
                                195 países y varios territorios. Las repeticiones de la temporada 1 comenzaron a transmitirse en las
                                emisoras tradicionales a finales de 2017.
                            </p>
                            <p className="descripcion fs-6">
                                El 11 de julio de 2017 se publicó un avance de la temporada 2, que incluye un Mercedes AMG GT R, un
                                Ripsaw
                                EV-2, un McLaren 720S, un Bugatti Chiron, un Audi TT RS, un Rimac Concept One, un avión americano
                                Grumman
                                AA-5 y transporte de personal blindado visitando el Dubai Mall. Un segundo tráiler, lanzado el 1 de
                                noviembre de 2017, presentó un Lamborghini Aventador S, Honda NSX, Ariel Nomad y Kia Stinger GT. La
                                temporada 2 filmó sus segmentos de estudio los miércoles entre octubre y diciembre de 2017. La
                                tercera
                                temporada comenzó a transmitirse el 18 de enero de 2019.
                            </p>
                            <a className="d-inline-flex btn btn-outline-primary align-items-center me-3" href="https://www.primevideo.com/detail/0STATSUKBRZ2SFUYITDMVNBPBK/ref=atv_dp_share_cu_r"><img src={require("../../Media/Icons/icons8-amazon-prime-video-50.png")} alt="" height={30} /> Ver en Amazon Prime Video</a>
                            <a className="d-inline-flex btn btn-outline-danger align-items-center" href="https://www.youtube.com/watch?v=G1qNofQY13I"><img src={require("../../Media/Icons/icons8-youtube-play-64.png")} alt="" height={30} /> Ver trailer</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Series;