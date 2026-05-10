<template>
    <PageTitle>Login</PageTitle>
    <div>
        <h1>login</h1>
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="login">Login</button>
        <p style="color:red">{{ error }}</p>
    </div>
</template>

<script setup>
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const isLoggedIn = useState('isLoggedIn', () => false)

    const login = async () => {
        console.log(email.value)
        console.log(password.value)
        if (email.value === 'suliman2005elkorti@gmail.com' && password.value === '123456') {
            isLoggedIn.value = true
            await navigateTo('/dashboard')
        } else {
            error.value = 'Wrong email or password'
    }
}
</script>