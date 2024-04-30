<template>
    <v-row no-gutters align="center" justify="center">
        <v-col cols="12" align="center">
            <!-- Título Centralizado -->
            <div class="page-title">Sobre</div>

            <!-- Seção 1: Sobre o EcoCommunity -->
            <div class="section-title">Sobre o EcoCommunity</div>
            <p class="section-content">
                O EcoCommunity é uma plataforma desenvolvida para gerenciar as operações internas de uma ONG, com foco na otimização do processo de doação de alimentos e na promoção da sustentabilidade. Ele oferece uma abordagem intuitiva e eficiente para facilitar essas atividades e ajudar a ONG a alcançar seus objetivos.
            </p>

            <!-- Seção 2: Objetivo -->
            <div class="section-title">Objetivo</div>
            <p class="section-content">
                O principal objetivo do EcoCommunity é reduzir o desperdício de alimentos, facilitar o processo de doação e ajudar a alcançar um mundo mais sustentável por meio de uma gestão eficiente dos recursos alimentícios disponíveis.
            </p>

            <!-- Seção 3: Nossa visão -->
            <div class="section-title">Nossa visão</div>
            <p class="section-content">
                Nossa visão é criar um mundo onde o desperdício de alimentos seja minimizado, as necessidades das comunidades carentes sejam atendidas e a sustentabilidade seja a base de todos os processos. O EcoCommunity visa ser um parceiro confiável e inovador para as ONGs e organizações de caridade.
            </p>

            <!-- Seção 4: Time -->
            <div class="section-title">Time</div>
            <p class="section-content">
                Nosso time é composto por desenvolvedores talentosos e dedicados que trabalham incansavelmente para aprimorar o EcoCommunity. Nossa equipe é comprometida com o sucesso de nossos clientes e usuários finais, garantindo uma experiência de alta qualidade e suporte contínuo.
            </p>

            <!-- Seção 5: Contato -->
            <div class="section-title">Contato</div>
            <p class="section-content">
                Para entrar em contato conosco, envie um e-mail para contato@ecocommunity.com ou ligue para (11) 5555-5555. Estamos disponíveis para responder a perguntas, fornecer suporte e discutir oportunidades de parceria.
            </p>

            <!-- Seção 6: Direitos Reservados -->
            <div class="section-title">Direitos Reservados</div>
            <p class="section-content">
                Todos os direitos reservados © 2024 EcoCommunity. A reprodução ou distribuição não autorizada deste material é proibida.
            </p>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            // Dados e variáveis podem ser incluídos aqui, caso necessário
        };
    },
    created() {
        // Lógica de criação assíncrona pode ser incluída aqui, caso necessário
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
}

/* Estilo para a seção */
.section-title {
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 10px;
    margin-left: 10px;
}

/* Estilo para o conteúdo das seções */
.section-content {
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    text-align: justify;
    margin: 25px;
    margin-left: 20px;
}

</style>