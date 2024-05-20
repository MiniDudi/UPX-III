<template>
    <v-container>
        <v-row no-gutters align="center" justify="center">
            <v-col cols="12" align="center">
                <!-- Título Centralizado -->
                <div class="page-title">Sobre</div>
            </v-col>
        </v-row>

        <!-- Seção 1: Sobre o EcoCommunity -->
        <v-row no-gutters align="center" justify="center" elevation="3" class="section-container">
            <v-col cols="6">
                <div class="section-title">Sobre o EcoCommunity</div>
                <p class="section-content">
                    O EcoCommunity é uma plataforma desenvolvida para gerenciar as operações internas de uma ONG, com
                    foco na otimização do processo de doação de alimentos e na promoção da sustentabilidade. Ele oferece
                    uma abordagem intuitiva e eficiente para facilitar essas atividades e ajudar a ONG a alcançar seus
                    objetivos.
                </p>
            </v-col>
            <v-col cols="6" align="center">
                <v-img src="@/styles/novomelao.png" alt="EcoCommunity" width="250" class="section-image"
                    elevation="3" />
            </v-col>
        </v-row>

        <!-- Seção 2: Objetivo -->
        <v-row no-gutters align="center" justify="center" elevation="3" class="section-container">
            <v-col cols="6" align="center">
                <v-img src="@/styles/novomelao.png" alt="Objetivo" width="250" class="section-image" elevation="3" />
            </v-col>
            <v-col cols="6">
                <div class="section-title">Objetivo</div>
                <p class="section-content">
                    O principal objetivo do EcoCommunity é reduzir o desperdício de alimentos, facilitar o processo de
                    doação e ajudar a alcançar um mundo mais sustentável por meio de uma gestão eficiente dos recursos
                    alimentícios disponíveis.
                </p>
            </v-col>
        </v-row>

        <!-- Seção 3: Nossa visão -->
        <v-row no-gutters align="center" justify="center" elevation="3" class="section-container">
            <v-col cols="6">
                <div class="section-title">Nossa visão</div>
                <p class="section-content">
                    Nossa visão é criar um mundo onde o desperdício de alimentos seja minimizado, as necessidades das
                    comunidades carentes sejam atendidas e a sustentabilidade seja a base de todos os processos. O
                    EcoCommunity visa ser um parceiro confiável e inovador para as ONGs e organizações de caridade.
                </p>
            </v-col>
            <v-col cols="6" align="center">
                <v-img src="@/styles/novomelao.png" alt="Nossa visão" width="250" class="section-image" elevation="3" />
            </v-col>
        </v-row>

        <!-- Seção 4: Time -->
        <v-row no-gutters align="center" justify="center" elevation="3" class="section-container">
            <v-col cols="6" align="center">
                <v-img src="@/styles/novomelao.png" alt="Time" width="250" class="section-image" elevation="3" />
            </v-col>
            <v-col cols="6">
                <div class="section-title">Time</div>
                <p class="section-content">
                    Nosso time é composto por desenvolvedores talentosos e dedicados que trabalham incansavelmente para
                    aprimorar o EcoCommunity. Nossa equipe é comprometida com o sucesso de nossos clientes e usuários
                    finais, garantindo uma experiência de alta qualidade e suporte contínuo.
                </p>
            </v-col>
        </v-row>

        <!-- Seção 5: Contato -->
        <v-row no-gutters align="center" justify="center" elevation="3" class="section-container">
            <v-col cols="6">
                <div class="section-title">Contato</div>
                <p class="section-content">
                    Para entrar em contato conosco, envie um e-mail para melaodev@gmail.com ou ligue para (15)
                    98128-9285. Estamos disponíveis para responder a perguntas, fornecer suporte e discutir
                    oportunidades de parceria.
                </p>
            </v-col>
            <v-col cols="6" align="center">
                <v-img src="@/styles/novomelao.png" alt="Contato" width="250" class="section-image" elevation="3" />
            </v-col>
        </v-row>

        <!-- Seção 6: Direitos Reservados -->
        <v-row no-gutters align="center" justify="center" elevation="3" class="section-container">
            <v-col cols="6" align="center">
                <v-img src="@/styles/novomelao.png" alt="Direitos Reservados" width="250" class="section-image"
                    elevation="3" />
            </v-col>
            <v-col cols="6">
                <div class="section-title">Direitos Reservados</div>
                <p class="section-content">
                    Todos os direitos reservados © 2024 EcoCommunity.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            // Dados e variáveis podem ser incluídos aqui, caso necessário.
        };
    },
    created() {
        // Lógica de criação assíncrona pode ser incluída aqui, caso necessário.
    }
};
</script>

<style scoped>
/* Estilo para o título centralizado */
.page-title {
    font-family: "Rubik", sans-serif;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
    color: #FFC641;
}

/* Estilo para as seções */
.section-title {
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    color: #FFC641;
    /* Alteração da cor dos títulos de seção */
    margin-bottom: 20px;
}

.section-content {
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    text-align: justify;
    margin: 20px;
}

.section-container {
    margin-bottom: 50px;
    /* Mais espaço entre as seções */
}

.image-section {
    display: flex;
    justify-content: center;
}

.section-image {
    border-radius: 10px;
    /* Adiciona elevação à imagem */
}
</style>
