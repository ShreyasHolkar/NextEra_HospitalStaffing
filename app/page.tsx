"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login clicked")
  }

  const handleForgotPassword = () => {
    console.log("Forgot password clicked")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <Card className="w-[400px] shadow-lg border border-slate-200">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-semibold text-slate-800">
            Admin Login
          </CardTitle>
          <CardDescription className="text-slate-600">
            Hospital Staffing Management System
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-slate-700">Email</Label>
              <Input
                type="email"
                placeholder="admin@hospital.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-visible:ring-slate-400"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-slate-700">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus-visible:ring-slate-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-slate-800 hover:bg-slate-700 text-white"
            >
              Sign In
            </Button>

            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-xs text-slate-500">or</span>
              <Separator className="flex-1" />
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-slate-600 hover:text-slate-900 transition"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
