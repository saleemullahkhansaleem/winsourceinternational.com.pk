import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { services } from "./Home";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("vision");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About Win Source International
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
              <TabsTrigger value="history">Our History</TabsTrigger>
              <TabsTrigger value="services">Our Services</TabsTrigger>
            </TabsList>
            <TabsContent value="vision">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Committed to provide unmatched assistance to our valued
                    clients by providing customized solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Focusing on competitiveness and timely task execution
                    without even an iota of compromise on "QUALITY".
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Business Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Honesty – Service – Growing Together "Continue to strive
                    hard in this challenging world for mutually Beneficial
                    Goals"
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">
                    Established in 2008, Win Source International has been on a
                    remarkable journey of growth and excellence:
                  </p>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                      <span>
                        Focused on building strategic long-term client
                        relationships
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                      <span>
                        Adherence to best practices in methodology, management,
                        and project execution
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                      <span>
                        Dedicated team that makes us stand tall in the current
                        competitive environment
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Comprehensive Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center space-x-3`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ChevronRight className="h-6 w-6 text-primary flex-shrink-0" />
                        <Link
                          to={service?.path}
                          className="text-lg hover:text-primary"
                        >
                          {service.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
