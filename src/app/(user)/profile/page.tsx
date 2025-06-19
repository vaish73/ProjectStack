"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Code, Calendar, Users, BookOpen, FileText, Edit, Save, X } from "lucide-react"

export default function Component() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "",
    branch: "",
    year: "",
    section: "",
    skills: "",
    bio: "",
  })

  const [editData, setEditData] = useState(profileData)

  const handleEdit = () => {
    setEditData(profileData)
    setIsEditing(true)
  }

  const handleSave = () => {
    setProfileData(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(profileData)
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string) => {
    console.log(value);
    const upSkill = value.split(/[, ]/)

    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <header className="bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center mt-3 justify-between">
            <div className="flex text-2xl font-bold items-center gap-3">
              Profile
            </div>
            <div className="flex gap-2 b">
              {!isEditing ? (
                <Button
                  onClick={handleEdit}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 bg-gray-900 text-gray-300 hover:text-gray-300 cursor-pointer hover:bg-gray-800"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    size="sm"
                    className="border-gray-600  bg-gray-900 text-gray-300 hover:text-gray-300 cursor-pointer hover:bg-gray-800"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    {isEditing ? (
                      <div className="space-y-4">
                        <Input
                          value={editData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your name"
                          className="text-2xl font-bold bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <Input
                            value={editData.branch}
                            onChange={(e) => handleInputChange("branch", e.target.value)}
                            placeholder="Branch (e.g., CSE)"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          />
                          <Input
                            value={editData.year}
                            onChange={(e) => handleInputChange("year", e.target.value)}
                            placeholder="Year (e.g., 3rd Year)"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          />
                          <Input
                            value={editData.section}
                            onChange={(e) => handleInputChange("section", e.target.value)}
                            placeholder="Section (e.g., A)"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-2xl font-bold text-white mb-2">{profileData.name || "Your Name"}</h2>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{profileData.branch || "Branch"}</span>
                          </div>
                          <Separator orientation="vertical" className="h-4 bg-gray-600" />
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{profileData.year || "Year"}</span>
                          </div>
                          <Separator orientation="vertical" className="h-4 bg-gray-600" />
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{profileData.section || "Section"}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Bio Section */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">About Me</h3>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea
                    value={editData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    placeholder="Tell us about yourself, your interests, and what drives your passion for technology..."
                    className="min-h-[120px] bg-gray-700 border-gray-600 text-white placeholder-gray-400 resize-none"
                  />
                ) : (
                  <div className="text-gray-300">
                    {profileData.bio ? (
                      <p>{profileData.bio}</p>
                    ) : (
                      <p className="italic text-gray-500">
                        Tell us about yourself, your interests, and what drives your passion for technology...
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Skills & Technologies</h3>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-2">
                    <Input
                      value={editData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      placeholder="Enter skills separated by commas (e.g., JavaScript, React, Node.js)"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <p className="text-xs text-gray-500">Separate skills with commas</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {profileData.skills ? (
                      <div className="flex flex-wrap gap-2">
                        {profileData.skills.split(/[, ]/).map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                          >
                            {skill.trim()}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-gray-500 italic text-sm mb-3">Add your skills and technologies...</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-gray-600 text-gray-400">
                            JavaScript
                          </Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-400">
                            React
                          </Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-400">
                            Node.js
                          </Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-400">
                            Python
                          </Badge>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800 border-gray-700 mt-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Completed Projects</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Code className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">No completed projects yet</p>
                <p className="text-sm text-gray-500 mt-1">Showcase your finished projects here</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 mt-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Pending Projects</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Code className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">No pending projects</p>
                <p className="text-sm text-gray-500 mt-1">Track your work-in-progress projects here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
