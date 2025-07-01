"use client"
import { Label } from "@/components/ui/label";
import { ModalType } from "./ModalType";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { parseDate } from "chrono-node"

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

const ReminderModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {
  const paymentFrequency = [
    {
      id: 1,
      name: "Monthly"
    },
    {
      id: 2,
      name: "MonYearly"
    },
    {
      id: 3,
      name: "Weekly"
    },
  ];

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("25th Every month")
  const [date, setDate] = useState<Date | undefined>(
    parseDate(value) || undefined
  )
  const [open2, setOpen2] = useState(false)
  const [value2, setValue2] = useState("5th Every month")
  const [date2, setDate2] = useState<Date | undefined>(
    parseDate(value) || undefined
  )
  const [month, setMonth] = useState<Date | undefined>(date)
  const [month2, setMonth2] = useState<Date | undefined>(date)

  return (
    <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
      <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[750px]">
        <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
          <p>Rent frequency & payment reminder</p>
          <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
        </div>
        <div className="py-2 px-4">
          <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full">
              <Label htmlFor="company-name">Rent payment frequency<span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select Payment Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Payment Type</SelectLabel>
                    {paymentFrequency.map(frequency => (
                      <SelectItem key={frequency.id} value={frequency.id.toString()}>{frequency.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="country-region">Rent Reminder/Statement date<span className="text-red-500">*</span></Label>
              <div className="relative flex gap-2 mt-2">
                <Input
                  id="date"
                  value={value}
                  placeholder="Tomorrow or next week"
                  className="bg-background pr-10"
                  onChange={(e) => {
                    setValue(e.target.value)
                    const date = parseDate(e.target.value)
                    if (date) {
                      setDate(date)
                      setMonth(date)
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault()
                      setOpen(true)
                    }
                  }}
                />
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      id="date-picker"
                      variant="ghost"
                      className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                    >
                      <CalendarIcon className="size-3.5" />
                      <span className="sr-only">Select date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      month={month}
                      onMonthChange={setMonth}
                      onSelect={(date) => {
                        setDate(date)
                        setValue(formatDate(date))
                        setOpen(false)
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-full">
              <Label htmlFor="email">Rent due date<span className="text-red-500">*</span></Label>
              <div className="relative flex gap-2 mt-2">
                <Input
                  id="date2"
                  value={value2}
                  placeholder="Tomorrow or next week"
                  className="bg-background pr-10"
                  onChange={(e) => {
                    setValue2(e.target.value)
                    const date2 = parseDate(e.target.value)
                    if (date2) {
                      setDate2(date2)
                      setMonth2(date2)
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault()
                      setOpen2(true)
                    }
                  }}
                />
                <Popover open={open2} onOpenChange={setOpen2}>
                  <PopoverTrigger asChild>
                    <Button
                      id="date-picker2"
                      variant="ghost"
                      className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                    >
                      <CalendarIcon className="size-3.5" />
                      <span className="sr-only">Select date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={date2}
                      captionLayout="dropdown"
                      month={month2}
                      onMonthChange={setMonth2}
                      onSelect={(date2) => {
                        setDate2(date2)
                        setValue2(formatDate(date2))
                        setOpen2(false)
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

          </div>
          <div className="w-full flex justify-end border-t border-gray-400 pt-3">
            <Button onClick={() => setModalOpen(0)} className={`bg-blue-500 cursor-pointer text-white hover:text-black`} variant="secondary">Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderModal;