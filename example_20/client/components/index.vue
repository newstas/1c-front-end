<template>
    <p>Перенаправления</p>
</template>

<script>
    modul.exports = {
        mounted: function() {
            if(this.$auth.isLoggedIn()) {
                this.$router.push("/feed");
            } else {
                this.$router.push("login");
            }
        }
    };
</script>
